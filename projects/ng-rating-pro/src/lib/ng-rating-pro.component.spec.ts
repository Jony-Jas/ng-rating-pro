import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRatingProComponent } from './ng-rating-pro.component';

describe('NgRatingProComponent', () => {
  let component: NgRatingProComponent;
  let fixture: ComponentFixture<NgRatingProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRatingProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRatingProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
