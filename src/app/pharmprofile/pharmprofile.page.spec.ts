import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmprofilePage } from './pharmprofile.page';

describe('PharmprofilePage', () => {
  let component: PharmprofilePage;
  let fixture: ComponentFixture<PharmprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
