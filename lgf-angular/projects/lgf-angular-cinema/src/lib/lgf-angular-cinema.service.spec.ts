import { TestBed } from '@angular/core/testing';

import { LgfAngularCinemaService } from './lgf-angular-cinema.service';

describe('LgfAngularCinemaService', () => {
  let service: LgfAngularCinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgfAngularCinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
