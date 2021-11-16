import { TestBed } from '@angular/core/testing';

import { UsuarioRequestService } from './usuario-request.service';

describe('UsuarioRequestService', () => {
  let service: UsuarioRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
