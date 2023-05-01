import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShoesComponent } from './product-shoes.component';

describe('ProductShoesComponent', () => {
  let component: ProductShoesComponent;
  let fixture: ComponentFixture<ProductShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductShoesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
