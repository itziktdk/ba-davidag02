import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vaucher',
  templateUrl: './vaucher.page.html',
  styleUrls: ['./vaucher.page.scss'],
})
export class VaucherPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  goHome()
  {
    this.navCtrl.navigateBack('home');
  }

}
