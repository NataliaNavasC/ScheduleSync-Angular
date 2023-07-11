import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledSessionComponent } from './scheduled-session.component';

describe('ScheduledSessionComponent', () => {
  let component: ScheduledSessionComponent;
  let fixture: ComponentFixture<ScheduledSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
