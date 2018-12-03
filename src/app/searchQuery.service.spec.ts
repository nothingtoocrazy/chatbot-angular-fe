import { TestBed } from '@angular/core/testing';

import { SearchQueryService } from './searchQuery.service';

describe('SearchQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchQueryService = TestBed.get(SearchQueryService);
    expect(service).toBeTruthy();
  });
});
