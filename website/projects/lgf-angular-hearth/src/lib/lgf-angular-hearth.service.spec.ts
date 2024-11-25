import { TestBed } from '@angular/core/testing';

import { LgfAngularHearthService } from './lgf-angular-hearth.service';

describe('LgfAngularHearthService', () => {
  let service: LgfAngularHearthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgfAngularHearthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
