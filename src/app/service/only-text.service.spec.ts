import { TestBed } from '@angular/core/testing';

import { OnlyTextService } from './only-text.service';

describe('OnlyTextService', () => {
  let service: OnlyTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
