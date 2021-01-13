import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AuthenticationService } from '../services/authentication.service';
import { ActionSheetController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { UserDataService } from '../services/user-data.service';
import { subscribeOn } from 'rxjs/operators';
// import { AngularFireAuth } from '@angular/fire/auth';


interface User {
  first: string;
  last: string;
  img: any;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  username: string;
  photoUrl: string;
  userDoc: any;
  firstName: any;
  userProfileCollection: any;
  userDetailes: any;
  userUID: string;
  users: Observable<User[]>;
  usersCollectionRef: AngularFirestoreCollection<User>;
  isAdmin = false;;
  // tslint:disable-next-line: max-line-length
  constructor(
    private navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private authService: AuthService,
    private authenticationService: AuthenticationService,
    private userDataService: UserDataService,
    private fireStore: AngularFirestore,
  ) {

    // this.userDoc = fireStore.doc<any>('users/xGT8mosXOfN9o4AMawx506Uotag2');
    // this.userProfileCollection = fireStore.collection<any>('users');
    // this.usersCollectionRef = afs.collection('users').doc('xGT8mosXOfN9o4AMawx506Uotag2').collection('userdata');
    // this.users = this.usersCollectionRef.valueChanges();
    // this.userDetailes = fireStore.collection<any>('users', ref =>
    // ref.where('doc', '==', true));

  }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    scrollbar: false
  };


  ngOnInit() {
    this.photoUrl = 'assets/imgs/user.png';

    this.authenticationService.authStatus()
      .subscribe(res => {
        console.log(res);
        if (res) {
          this.firstName = res.displayName;
          this.userUID = res.uid;
          localStorage.setItem('userId', res.uid);
          localStorage.setItem('email', res.email);
          this.userDataService.getUserData(res.uid)
            .subscribe((userData: any) => {
              if (userData) {
                this.isAdmin = userData.admin;
                console.log('usrdata ', this.isAdmin);
                localStorage.setItem('isAdmin', userData.admin);
              } else {
                this.authService.signOutCurrentUser();
              }
            }, err => { this.authService.signOutCurrentUser(); });
          if (res.photoURL) { this.photoUrl = res.photoURL; }
        }
      });

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ניווט מהיר',
      cssClass: 'Alert',
      buttons: [{
        text: 'T20/C4',
        role: 'destructive',
        icon: 'color-filter-outline',
        handler: () => {
          console.log('Delete clicked');
          this.navCtrl.navigateForward('/ourproducts?category=%7B"categoryImage":"assets%2Fimgs%2Fcc1.png","categoryName":"תפרחות","categoryKind":"T20%2FC4"%7D');

        }
      }, {
        text: 'T15/C3',
        icon: 'color-filter-outline',
        handler: () => {
          console.log('Share clicked');
          this.navCtrl.navigateForward('/ourproducts?category=%7B"categoryImage":"assets%2Fimgs%2Fcc1.png","categoryName":"תפרחות","categoryKind":"T15%2FC3"%7D');
        }
      }, {
        text: 'שמני קנאביס',
        icon: 'color-fill-outline',
        handler: () => {
          console.log('Play clicked');
          this.navCtrl.navigateForward('/ourproducts?category=%7B"categoryImage":"assets%2Fimgs%2Fcc1.png","categoryName":"שמן","categoryKind":"קנאביס"%7D');

        }
      }, {
        text: 'סגור',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  goPharmacies() {
    this.navCtrl.navigateForward('searchdoc');

  }

  goDoctors() {
    this.navCtrl.navigateForward('doctors');
  }

  goProducts() {
    this.navCtrl.navigateForward('productcategories');
  }

  goLicense() {
    this.navCtrl.navigateForward('license');
  }

  // goLogin() {
  //   this.authService.signOutCurrentUser()
  //     .then(res => {
  //       localStorage.clear();
  //       this.navCtrl.navigateForward('login');
  //       console.log('signout res ', res);
  //     });
  // }
  goOut() {
    this.authService.signOutCurrentUser()
      .then(res => {
        localStorage.clear();
        this.navCtrl.navigateForward('login');
        console.log('signout res ', res);
      });
  }

  goVaucher() {
    this.navCtrl.navigateForward('vaucher');
  }
  goMange() {

    this.navCtrl.navigateForward('pharmanage');
  }
  goNews() {
    this.navCtrl.navigateForward('news');
  }
}
