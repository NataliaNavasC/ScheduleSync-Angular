import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSessionListComponent } from './student-session-list.component';

describe('StudentSessionListComponent', () => {
  let component: StudentSessionListComponent;
  let fixture: ComponentFixture<StudentSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSessionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
