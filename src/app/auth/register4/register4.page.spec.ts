import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register4Page } from './register4.page';

describe('register4Page', () => {
  let component: Register4Page;
  let fixture: ComponentFixture<Register4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
