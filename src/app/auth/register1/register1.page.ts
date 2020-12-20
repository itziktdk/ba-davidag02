import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.page.html',
  styleUrls: ['./register1.page.scss'],
})
export class Register1Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
Register2()
{
  this.navCtrl.navigateForward('Register2');
}
}

