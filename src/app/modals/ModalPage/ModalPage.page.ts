import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ViewChild} from '@angular/core';


@Component({
  selector: 'app-ModalPage',
  templateUrl: './ModalPage.page.html',
  styleUrls: ['./ModalPage.page.scss'],
})

export class ModalPagePage implements OnInit {
  name;
  category;
  ProdRecords;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

}
