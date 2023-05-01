import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSignupFormComponent } from './customer-signup-form.component';

describe('CustomerSignupFormComponent', () => {
  let component: CustomerSignupFormComponent;
  let fixture: ComponentFixture<CustomerSignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerSignupFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
