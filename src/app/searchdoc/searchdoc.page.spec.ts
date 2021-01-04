import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchdocPage } from './searchdoc.page';

describe('SearchdocPage', () => {
  let component: SearchdocPage;
  let fixture: ComponentFixture<SearchdocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchdocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
