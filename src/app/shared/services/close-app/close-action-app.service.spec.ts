import { TestBed } from '@angular/core/testing';

import { CloseActionAppService } from './close-action-app.service';

describe('CloseActionAppService', () => {
  let service: CloseActionAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloseActionAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
