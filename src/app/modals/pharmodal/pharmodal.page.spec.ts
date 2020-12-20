import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmodalPage } from './pharmodal.page';

describe('PharmodalPage', () => {
  let component: PharmodalPage;
  let fixture: ComponentFixture<PharmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
