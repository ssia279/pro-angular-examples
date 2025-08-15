import { TestBed } from '@angular/core/testing';

import { StoreFirstGuard } from './store-first-guard';

describe('StoreFirstGuard', () => {
  let service: StoreFirstGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreFirstGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
