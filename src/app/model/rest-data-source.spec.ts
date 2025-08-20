import { TestBed } from '@angular/core/testing';

import { RestDataSource } from './rest-data-source';

describe('RestDataSource', () => {
  let service: RestDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
