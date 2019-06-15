import { TestBed, async, inject } from '@angular/core/testing';

import { GuardloginGuard } from './guardlogin.guard';

describe('GuardloginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardloginGuard]
    });
  });

  it('should ...', inject([GuardloginGuard], (guard: GuardloginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
