import { TestBed } from '@angular/core/testing';

import { AuthloadGuard } from './authload.guard';

describe('AuthloadGuard', () => {
  let guard: AuthloadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthloadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
