import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSessionViewComponent } from './student-session-view.component';

describe('StudentSessionViewComponent', () => {
  let component: StudentSessionViewComponent;
  let fixture: ComponentFixture<StudentSessionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSessionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSessionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
