import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateProductPagePage } from './create-product-page.page';

describe('CreateProductPagePage', () => {
  let component: CreateProductPagePage;
  let fixture: ComponentFixture<CreateProductPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProductPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
