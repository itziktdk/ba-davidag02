import { NavController } from '@ionic/angular';
import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActionSheetController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from '../services/auth.service';

export interface ImgFile {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-register1',
  templateUrl: './register1.page.html',
  styleUrls: ['./register1.page.scss'],
})
export class Register1Page implements OnInit {
  step1 = true;
  step2: boolean;
  step2init = true;
  step3 = false;
  step3init = true;
  step4 = false;

  password: any;
  capturedSnapURL: string;

  logup = {
    first: '',
    last: '',
    address: '',
    id: '',
    city: '',
    number: ''
  };
  step2From = {
    licenseNumber: '',
    licenseExpireDate: '',
    prescriptionValidity: '',
    licenseImgName: null,
    recieptImgName: null,
    idImgName: null
  };

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  // File upload task
  fileUploadTask: AngularFireUploadTask;

  // Upload progress
  percentageVal: Observable<number>;

  // Track file uploading with snapshot
  trackSnapshot: Observable<any>;

  // Uploaded File URL
  UploadedImageURL: Observable<string>;

  // Uploaded image collection
  files: Observable<ImgFile[]>;

  // Image specifications
  imgName: string;
  imgSize: number;

  // File uploading status
  isFileUploading: boolean;
  isFileUploaded: boolean;

  private filesCollection: AngularFirestoreCollection<ImgFile>;
  email: string;
  userid: string;
  file: File;
  isSocialLogin = false;

  constructor(
    private navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    private auth: AuthService,
  ) {

    this.isFileUploading = false;
    this.isFileUploaded = false;

    // Define uploaded files collection
    this.filesCollection = afs.collection<ImgFile>('imagesCollection');
    this.files = this.filesCollection.valueChanges();

  }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
      this.isSocialLogin = true;
    }
    // this.email = history.state.data;
    // console.log(this.email);
  }

  signup() {
    if (this.isSocialLogin) {
      this.userid = localStorage.getItem('userId');
      this.afs.doc(`users/${this.userid}`).set({
        userdata: this.logup
      });
      this.goStep2();
    } else {
      console.log(this.logup);
      this.auth.register(this.email, this.password, this.logup).then(async () => {
        const user = await this.auth.getCurrentUser();
        localStorage.setItem('userId', user);
        localStorage.setItem('email', this.email);
        this.userid = localStorage.getItem('userId');
        this.afs.doc(`users/${this.userid}`).set({
          userdata: this.logup
        });
        this.goStep2();
        // this.presentAlert('Success', 'You are registered!');
        // this.navCtrl.navigateForward('home');
      })
        .catch(err => {
          return false;
        });
    }



  }

  async signup2() {
    console.log(this.step2From);
    this.afs.doc(`users/${this.userid}`).update({
      documents: this.step2From
    });
    this.goStep3();
  }

  signup3() {
    console.log(this.logup);
    this.auth.register(this.email, this.password, this.logup).then(async () => {
      this.afs.doc(`users/${this.userid}`).update({
        userdata: this.logup
      });
      this.goStep4();
      // this.presentAlert('Success', 'You are registered!');
      // this.navCtrl.navigateForward('home');
    })
      .catch(err => {
        return false;
      });
  }

  async presentActionSheet(type: string, name: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'בחר פעולה',
      cssClass: 'actions',
      buttons: [{
        text: 'העלה תמונה',
        role: 'destructive',
        icon: 'cloud-upload',
        handler: () => {
          const selectfile = document.getElementsByClassName(name)[0] as HTMLElement;
          selectfile.click();
        }
      }, {
        text: 'צילום תמונה',
        icon: 'camera',
        handler: () => {
          this.takeSnap(type);
        }
      }]
    });
    await actionSheet.present();
  }


  async takeSnap(type: string) {
    try {
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
      const result = await this.camera.getPicture(options);
      console.log(result);
      const image = `data:image/jpeg;base64,${result}`;
      // Storage path
      const fileStoragePath = `filesStorage/${new Date().getTime()}_cam`;
      const pictures = this.afStorage.ref(fileStoragePath);
      this.saveImage('G', pictures, image, type);
    } catch (e) {
      console.error(e);
    }
  }

  uploadImage(event: FileList, type: string) {

    const file = event.item(0);
    this.file = file;

    // Image validation
    if (file.type.split('/')[0] !== 'image') {
      console.log('File type is not supported!');
      return;
    }
    this.isFileUploading = true;
    this.isFileUploaded = false;
    this.imgName = file.name;
    // Storage path
    const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;
    // Image reference
    const imageRef = this.afStorage.ref(fileStoragePath);
    this.saveImage('G', imageRef, file, type);
    this.percentageVal = this.fileUploadTask.percentageChanges();

  }

  saveImage(type: string, imageRef: any, fileORfileString, fileType) {
    let fileUploadTask;
    if (type === 'C') {
      fileUploadTask = type === imageRef.putString(fileORfileString, 'data_url');
    } else if (type === 'G') {
      fileUploadTask = type === imageRef.put(fileORfileString);
    }
    fileUploadTask.snapshotChanges().
      subscribe((snap) => {
        // Retreive uploaded image storage path
        this.UploadedImageURL = imageRef.getDownloadURL();
        console.log(this.UploadedImageURL);
        this.UploadedImageURL.subscribe(resp => {
          this.storeFileLinkFirebase({
            name: fileORfileString.name,
            filepath: resp,
            size: this.imgSize
          }, fileType);
          this.isFileUploading = false;
          this.isFileUploaded = true;
        }, error => {
          console.log(error);
        });
        this.imgSize = snap.totalBytes;
      });
  }


  storeFileLinkFirebase(image: ImgFile, type: string) {
    if (type === 'L') {
      this.step2From.licenseImgName = image;
    } else if (type === 'I') {
      this.step2From.idImgName = image;
    } else if (type === 'R') {
      this.step2From.recieptImgName = image;
    }
  }

  goStep2() {
    this.step1 = false;
    this.step2 = true;
    this.step2init = false;
    console.log(this.step3init);
  }

  goStep3() {
    this.step2 = false;
    this.step3 = true;
    this.step3init = false;
    console.log('step3 started');
    console.log(this.step3init);
  }

  goStep4() {
    this.step3 = false;
    this.step4 = true;
  }

  goHome() {
    this.navCtrl.navigateRoot('home');
  }


}
