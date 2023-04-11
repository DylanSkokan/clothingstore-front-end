import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShirtComponent } from './view-shirt.component';

describe('ViewShirtComponent', () => {
  let component: ViewShirtComponent;
  let fixture: ComponentFixture<ViewShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShirtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
