import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-survey3',
  templateUrl: './survey3.page.html',
  styleUrls: ['./survey3.page.scss'],
})
export class Survey3Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome()
{
  this.navCtrl.navigateForward('home');
}
}
