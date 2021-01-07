import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-pharmodal',
  templateUrl: './pharmodal.page.html',
  styleUrls: ['./pharmodal.page.scss'],
})
export class PharmodalPage implements OnInit {
  data;
  constructor(
    private modalCtrl: ModalController,
    private launchNavigator: LaunchNavigator,
    private fService: FirebaseService,
    private route: ActivatedRoute,
    private iab: InAppBrowser
  ) {
    console.log('data ', this.data);
  }

  ngOnInit() {
    console.log('data ', this.data);
  }

  close() {
    this.modalCtrl.dismiss();
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

}
