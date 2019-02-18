import { TestBed } from '@angular/core/testing';

import { CanineService } from './canine.service';

describe('CanineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanineService = TestBed.get(CanineService);
    expect(service).toBeTruthy();
  });
});
