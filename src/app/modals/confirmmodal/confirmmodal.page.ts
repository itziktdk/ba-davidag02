import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmmodal',
  templateUrl: './confirmmodal.page.html',
  styleUrls: ['./confirmmodal.page.scss'],
})
export class ConfirmmodalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

}
