import { TestBed } from '@angular/core/testing';

import { OrderRepository } from './order-repository';

describe('OrderRepository', () => {
  let service: OrderRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
