import { TestBed } from '@angular/core/testing';

import { NgRatingProService } from './ng-rating-pro.service';

describe('NgRatingProService', () => {
  let service: NgRatingProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRatingProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
