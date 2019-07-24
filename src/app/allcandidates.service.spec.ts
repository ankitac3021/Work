import { TestBed } from '@angular/core/testing';

import { AllcandidatesService } from './allcandidates.service';

describe('AllcandidatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllcandidatesService = TestBed.get(AllcandidatesService);
    expect(service).toBeTruthy();
  });
});
