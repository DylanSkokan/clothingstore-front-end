import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHatComponent } from './view-hat.component';

describe('ViewHatComponent', () => {
  let component: ViewHatComponent;
  let fixture: ComponentFixture<ViewHatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
