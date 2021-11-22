import { TestBed } from '@angular/core/testing';

import { AppRolesService } from './app-roles.service';

describe('AppRolesService', () => {
  let service: AppRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
