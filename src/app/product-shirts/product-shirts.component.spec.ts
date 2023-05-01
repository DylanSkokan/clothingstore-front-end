import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShirtsComponent } from './product-shirts.component';

describe('ProductShirtsComponent', () => {
  let component: ProductShirtsComponent;
  let fixture: ComponentFixture<ProductShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductShirtsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
