import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pharmodal',
  templateUrl: './pharmodal.page.html',
  styleUrls: ['./pharmodal.page.scss'],
})
export class PharmodalPage implements OnInit {
  data;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('data ', this.data)
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
