import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalariePage } from './salarie.page';

describe('SalariePage', () => {
  let component: SalariePage;
  let fixture: ComponentFixture<SalariePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalariePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalariePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
