import { TestBed } from '@angular/core/testing';

import { SpinnerLoadService } from './spinner-load.service';

describe('SpinnerLoadService', () => {
  let service: SpinnerLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
