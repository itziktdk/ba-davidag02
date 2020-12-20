import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register3Page } from './register3.page';

describe('register3Page', () => {
  let component: Register3Page;
  let fixture: ComponentFixture<Register3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
