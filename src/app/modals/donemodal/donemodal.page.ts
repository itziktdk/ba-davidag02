import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donemodal',
  templateUrl: './donemodal.page.html',
  styleUrls: ['./donemodal.page.scss'],
})
export class DonemodalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

}
