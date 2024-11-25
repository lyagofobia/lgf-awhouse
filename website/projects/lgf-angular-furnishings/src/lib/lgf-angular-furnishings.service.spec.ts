import { TestBed } from '@angular/core/testing';

import { LgfAngularFurnishingsService } from './lgf-angular-furnishings.service';

describe('LgfAngularFurnishingsService', () => {
  let service: LgfAngularFurnishingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgfAngularFurnishingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
