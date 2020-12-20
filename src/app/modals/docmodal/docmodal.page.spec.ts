import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocmodalPage } from './docmodal.page';

describe('DocmodalPage', () => {
  let component: DocmodalPage;
  let fixture: ComponentFixture<DocmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
