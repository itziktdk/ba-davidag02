import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealvouchersPage } from './realvouchers.page';

describe('RealvouchersPage', () => {
  let component: RealvouchersPage;
  let fixture: ComponentFixture<RealvouchersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealvouchersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealvouchersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
