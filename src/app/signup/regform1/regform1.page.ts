import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-regform1',
  templateUrl: './regform1.page.html',
  styleUrls: ['./regform1.page.scss'],
})
export class Regform1Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
regform2()
{
  this.navCtrl.navigateForward('regform2');
}
}
