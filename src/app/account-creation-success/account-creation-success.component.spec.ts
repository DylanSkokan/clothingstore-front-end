import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreationSuccessComponent } from './account-creation-success.component';

describe('AccountCreationSuccessComponent', () => {
  let component: AccountCreationSuccessComponent;
  let fixture: ComponentFixture<AccountCreationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCreationSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCreationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
