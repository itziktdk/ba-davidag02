import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmanagePage } from './pharmanage.page';

describe('PharmanagePage', () => {
  let component: PharmanagePage;
  let fixture: ComponentFixture<PharmanagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmanagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmanagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
