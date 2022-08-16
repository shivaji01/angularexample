import { TestBed } from '@angular/core/testing';

import { AuthnewInterceptor } from './authnew.interceptor';

describe('AuthnewInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthnewInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthnewInterceptor = TestBed.inject(AuthnewInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
