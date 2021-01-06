import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-docmodal',
  templateUrl: './docmodal.page.html',
  styleUrls: ['./docmodal.page.scss'],
})
export class DocmodalPage implements OnInit {
  doctorData: any;
  constructor(
    private modalCtrl: ModalController,
    private fService: FirebaseService,
    private iab: InAppBrowser) { }

  ngOnInit() {
    // this.doctorData.url = 'https://www.facebook.com/';
  }

  onNavigate(city: string) {
    console.log('on nav');
    this.fService.goNavigate(city)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  onCallDial(num) {
    this.fService.goCallDial(num)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  onOpenBrowser(link: string) {
    const browser = this.iab.create(link);
    // browser.executeScript(...);

    // browser.insertCSS(...);
    // browser.on('loadstop').subscribe(event => {
    //   browser.insertCSS({ code: 'body{color: red;' });
    // });
    // browser.close();
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
