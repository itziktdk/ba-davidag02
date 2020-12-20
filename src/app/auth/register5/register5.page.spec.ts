import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register5Page } from './register5.page';

describe('Register5Page', () => {
  let component: Register5Page;
  let fixture: ComponentFixture<Register5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
