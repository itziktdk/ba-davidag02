import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Survey3Page } from './survey3.page';

describe('Survey3Page', () => {
  let component: Survey3Page;
  let fixture: ComponentFixture<Survey3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Survey3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Survey3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
