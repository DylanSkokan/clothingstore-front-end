import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPantsComponent } from './view-pants.component';

describe('ViewPantsComponent', () => {
  let component: ViewPantsComponent;
  let fixture: ComponentFixture<ViewPantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPantsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
