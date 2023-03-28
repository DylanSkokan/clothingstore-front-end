import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPantsComponent } from './product-pants.component';

describe('ProductPantsComponent', () => {
  let component: ProductPantsComponent;
  let fixture: ComponentFixture<ProductPantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
