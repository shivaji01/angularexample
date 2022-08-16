import { TestBed } from '@angular/core/testing';

import { HttpstaticdataService } from './httpstaticdata.service';

describe('HttpstaticdataService', () => {
  let service: HttpstaticdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpstaticdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
