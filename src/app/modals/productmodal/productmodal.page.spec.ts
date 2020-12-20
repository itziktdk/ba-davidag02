import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductmodalPage } from './productmodal.page';

describe('ProductmodalPage', () => {
  let component: ProductmodalPage;
  let fixture: ComponentFixture<ProductmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
