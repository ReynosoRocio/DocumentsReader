import { TestBed } from '@angular/core/testing';

import { Connection2ApiService } from './connection2-api.service';

describe('Connection2ApiService', () => {
  let service: Connection2ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Connection2ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
