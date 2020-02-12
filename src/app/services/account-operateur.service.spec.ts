import { TestBed } from '@angular/core/testing';

import { AccountOperateurService } from './account-operateur.service';

describe('AccountOperateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountOperateurService = TestBed.get(AccountOperateurService);
    expect(service).toBeTruthy();
  });
});
