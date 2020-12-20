import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Survey2Page } from './survey2.page';

describe('Survey2Page', () => {
  let component: Survey2Page;
  let fixture: ComponentFixture<Survey2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Survey2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Survey2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
