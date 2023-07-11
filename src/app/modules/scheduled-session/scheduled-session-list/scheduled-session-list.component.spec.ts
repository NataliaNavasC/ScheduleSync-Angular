import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledSessionListComponent } from './scheduled-session-list.component';

describe('ScheduledSessionListComponent', () => {
  let component: ScheduledSessionListComponent;
  let fixture: ComponentFixture<ScheduledSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledSessionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
