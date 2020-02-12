import { TestBed } from '@angular/core/testing';

import { AccountProfesseurService } from './account-professeur.service';

describe('AccountProfesseurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountProfesseurService = TestBed.get(AccountProfesseurService);
    expect(service).toBeTruthy();
  });
});
