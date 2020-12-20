import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Survey1Page } from './survey1.page';

describe('Survey1Page', () => {
  let component: Survey1Page;
  let fixture: ComponentFixture<Survey1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Survey1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Survey1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
