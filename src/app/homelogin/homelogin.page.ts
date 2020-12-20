import { Component } from '@angular/core';
// import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.page.html',
  styleUrls: ['./homelogin.page.scss'],
})
export class HomeloginPage {

  constructor(private navCtrl: NavController, private router: Router) {}

  goFurther(){
    console.log('click test');
  }
  goLicense()
  {
    this.navCtrl.navigateForward('license');
  }

register2()
{
  this.navCtrl.navigateForward('/auth/register2');
}

navigate(){
  this.router.navigate(['register1']);
}
}
