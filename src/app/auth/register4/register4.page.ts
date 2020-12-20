import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register4',
  templateUrl: './register4.page.html',
  styleUrls: ['./register4.page.scss'],
})


export class Register4Page implements OnInit {
  public form = [
    { val: 'תשובה א', isChecked: false },
    { val: 'תשובה ב', isChecked: false },
    { val: 'תשובה ג', isChecked: false }
  ];



  constructor() { }

  ngOnInit() {

  }

}
