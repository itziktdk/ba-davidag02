import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalareaPage } from './personalarea.page';

describe('PersonalareaPage', () => {
  let component: PersonalareaPage;
  let fixture: ComponentFixture<PersonalareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
