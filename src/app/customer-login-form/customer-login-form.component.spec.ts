import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoginFormComponent } from './customer-login-form.component';

describe('CustomerLoginFormComponent', () => {
  let component: CustomerLoginFormComponent;
  let fixture: ComponentFixture<CustomerLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerLoginFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
