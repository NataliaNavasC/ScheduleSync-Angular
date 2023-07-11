import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledSessionViewComponent } from './scheduled-session-view.component';

describe('ScheduledSessionViewComponent', () => {
  let component: ScheduledSessionViewComponent;
  let fixture: ComponentFixture<ScheduledSessionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledSessionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledSessionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
