import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegfinishPage } from './regfinish.page';

describe('RegfinishPage', () => {
  let component: RegfinishPage;
  let fixture: ComponentFixture<RegfinishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegfinishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegfinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
