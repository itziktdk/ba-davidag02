import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regform2Page } from './regform2.page';

describe('Regform2Page', () => {
  let component: Regform2Page;
  let fixture: ComponentFixture<Regform2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regform2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regform2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
