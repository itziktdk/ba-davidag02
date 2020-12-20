import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { T20c4Page } from './t20c4.page';

describe('T20c4Page', () => {
  let component: T20c4Page;
  let fixture: ComponentFixture<T20c4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T20c4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(T20c4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
