import { TestBed } from '@angular/core/testing';

import { MinieditorVcService } from './minieditor.service';

describe('MinieditorVcService', () => {
  let service: MinieditorVcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinieditorVcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
