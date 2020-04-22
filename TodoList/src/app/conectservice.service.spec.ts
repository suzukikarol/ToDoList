import { TestBed } from '@angular/core/testing';

import { ConectserviceService } from './conectservice.service';

describe('ConectserviceService', () => {
  let service: ConectserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
