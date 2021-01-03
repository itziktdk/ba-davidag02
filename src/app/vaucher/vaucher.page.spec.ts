import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaucherPage } from './vaucher.page';

describe('VaucherPage', () => {
  let component: VaucherPage;
  let fixture: ComponentFixture<VaucherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaucherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaucherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
