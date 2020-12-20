import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonemodalPage } from './donemodal.page';

describe('DonemodalPage', () => {
  let component: DonemodalPage;
  let fixture: ComponentFixture<DonemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
