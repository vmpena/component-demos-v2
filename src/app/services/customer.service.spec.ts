/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerServiceService } from './customer-service.service';

describe('CustomerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerServiceService]
    });
  });

  it('should ...', inject([CustomerServiceService], (service: CustomerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
