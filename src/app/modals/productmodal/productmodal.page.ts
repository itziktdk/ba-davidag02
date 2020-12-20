import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-productmodal',
  templateUrl: './productmodal.page.html',
  styleUrls: ['./productmodal.page.scss'],
})
export class ProductmodalPage implements OnInit {
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

}
