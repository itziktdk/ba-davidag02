import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

   
  goHome()
  {
    this.navCtrl.navigateBack('home');
  }

}
