import { Component, NgModule, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActionSheetController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { element } from 'protractor';
import { createPublicKey } from 'crypto';

export interface ImgFile {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-regform2',
  templateUrl: './regform2.page.html',
  styleUrls: ['./regform2.page.scss'],
})
export class Regform2Page implements OnInit {

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

  constructor(
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage
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


  ngOnInit(): void {
  //  throw new Error('Method not implemented.');
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

}
