import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShoesComponent } from './view-shoes.component';

describe('ViewShoesComponent', () => {
  let component: ViewShoesComponent;
  let fixture: ComponentFixture<ViewShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
