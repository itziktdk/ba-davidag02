import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private fService: FirebaseService) { }

  ngOnInit() {
  }


  goHome() {
    this.navCtrl.navigateBack('home');
  }

  onCallDial(num) {
    this.fService.goCallDial(num)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
