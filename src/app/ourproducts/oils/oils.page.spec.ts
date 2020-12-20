import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OilsPage } from './oils.page';

describe('OilsPage', () => {
  let component: OilsPage;
  let fixture: ComponentFixture<OilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
