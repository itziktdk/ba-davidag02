import { NavController } from '@ionic/angular';
import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActionSheetController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

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
step1 = false;
step2 = true;
step2init = true;
step3 = false;
step3init = true;
step4 = false;
logup = {first: '', last: '', address: '',  id: '',city:'',number:''};
 password:any;
capturedSnapURL: string;

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
 
  signup() {
   this.auth.register(this.email,this.password,this.logup);
}

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

    async presentActionSheet(name: string) {

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
            this.takeSnap();
          }
        }]
      });
      await actionSheet.present();
    }

  ngOnInit() {
    this.email=history.state.data;
    console.log(this.email);
  }


  takeSnap() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI

      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
    }, (err) => {

      console.log(err);
      // Handle error
    });
  }


  uploadImage(event: FileList) {

      const file = event.item(0);

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

      // File upload task
      this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);

      // Show uploading progress
      this.percentageVal = this.fileUploadTask.percentageChanges();
      this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(

        finalize(() => {
          // Retreive uploaded image storage path
          this.UploadedImageURL = imageRef.getDownloadURL();

          this.UploadedImageURL.subscribe(resp => {
            this.storeFilesFirebase({
              name: file.name,
              filepath: resp,
              size: this.imgSize
            });
            this.isFileUploading = false;
            this.isFileUploaded = true;
          }, error => {
            console.log(error);
          });
        }),
        tap(snap => {
            this.imgSize = snap.totalBytes;
        })
      );
  }

  storeFilesFirebase(image: ImgFile) {
      const fileId = this.afs.createId();

      this.filesCollection.doc(fileId).set(image).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  }

  goStep2()
  {
    this.step1 = false;
    this.step2 = true;
    this.step2init = false;
    console.log(this.step3init);
  }

  goStep3()
  {
    this.step2 = false;
    this.step3 = true;
    this.step3init = false;
    console.log('step3 started');
    console.log(this.step3init);
  }

  goStep4()
  {
    this.step3 = false;
    this.step4 = true;
  }

  goHome()
  {
    this.navCtrl.navigateRoot('home');
  }


}
