import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeloginPage } from './homelogin.page';

describe('HomeloginPage', () => {
  let component: HomeloginPage;
  let fixture: ComponentFixture<HomeloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
