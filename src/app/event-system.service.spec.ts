import { TestBed } from '@angular/core/testing';

import { EventSystemService } from './event-system.service';

describe('EventSystemService', () => {
  let service: EventSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
