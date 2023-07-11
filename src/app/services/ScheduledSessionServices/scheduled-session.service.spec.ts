import { TestBed } from '@angular/core/testing';

import { ScheduledSessionService } from './scheduled-session.service';

describe('ScheduleSessionService', () => {
  let service: ScheduledSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
