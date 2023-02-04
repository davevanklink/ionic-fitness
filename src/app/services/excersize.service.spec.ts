/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExcersizeService } from './excersize.service';

describe('Service: Excersize', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcersizeService]
    });
  });

  it('should ...', inject([ExcersizeService], (service: ExcersizeService) => {
    expect(service).toBeTruthy();
  }));
});
