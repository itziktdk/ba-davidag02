import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdertrackingPage } from './ordertracking.page';

describe('OrdertrackingPage', () => {
  let component: OrdertrackingPage;
  let fixture: ComponentFixture<OrdertrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdertrackingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdertrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
