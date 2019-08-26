import { TestBed } from '@angular/core/testing';

import { Sevice1Service } from './sevice1.service';

describe('Sevice1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Sevice1Service = TestBed.get(Sevice1Service);
    expect(service).toBeTruthy();
  });
});
