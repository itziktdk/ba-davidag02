import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regform1Page } from './regform1.page';

describe('Regform1Page', () => {
  let component: Regform1Page;
  let fixture: ComponentFixture<Regform1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regform1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regform1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
