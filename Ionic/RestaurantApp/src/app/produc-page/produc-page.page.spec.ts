import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProducPagePage } from './produc-page.page';

describe('ProducPagePage', () => {
  let component: ProducPagePage;
  let fixture: ComponentFixture<ProducPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProducPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
