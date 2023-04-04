import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHatsComponent } from './product-hats.component';

describe('ProductHatsComponent', () => {
  let component: ProductHatsComponent;
  let fixture: ComponentFixture<ProductHatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
