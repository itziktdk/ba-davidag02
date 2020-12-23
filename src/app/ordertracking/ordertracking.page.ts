import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordertracking',
  templateUrl: './ordertracking.page.html',
  styleUrls: ['./ordertracking.page.scss'],
})
export class OrdertrackingPage implements OnInit {
  category:any = "s2";
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(this.category);
  }


  goDetails()
  {
    this.navCtrl.navigateForward('ordertrackdetails');
  }

}
