import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
})


export class Register3Page implements OnInit {
  public form = [
    { val: 'תשובה א', isChecked: false },
    { val: 'תשובה ב', isChecked: false },
    { val: 'תשובה ג', isChecked: false }
  ];


  constructor() { }

  ngOnInit() {

  }

}
