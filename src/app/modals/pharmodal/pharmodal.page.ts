import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pharmodal',
  templateUrl: './pharmodal.page.html',
  styleUrls: ['./pharmodal.page.scss'],
})
export class PharmodalPage implements OnInit {
  name;
  phone;
  city;
  img;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

}
