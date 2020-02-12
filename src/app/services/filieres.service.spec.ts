import { TestBed } from '@angular/core/testing';

import { FilieresService } from './filieres.service';

describe('FilieresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilieresService = TestBed.get(FilieresService);
    expect(service).toBeTruthy();
  });
});
