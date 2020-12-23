import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Popover1Component } from './popover1.component';

describe('Popover1Component', () => {
  let component: Popover1Component;
  let fixture: ComponentFixture<Popover1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popover1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Popover1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
