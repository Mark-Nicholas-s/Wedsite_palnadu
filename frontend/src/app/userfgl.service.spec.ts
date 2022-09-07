import { TestBed } from '@angular/core/testing';

import { UserfglService } from './userfgl.service';

describe('UserfglService', () => {
  let service: UserfglService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserfglService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
