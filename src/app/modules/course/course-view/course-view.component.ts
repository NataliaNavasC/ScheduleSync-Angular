import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/courseServices/course.service';
import { Course } from 'src/model/Course';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss']
})
export class CourseViewComponent {

  public course!:Course;

  constructor(public courseService:CourseService){
    this.findCourse();
  }


  public findCourse(){
    this.courseService.findById(Number(sessionStorage.getItem("courseId"))).subscribe(
      (response:Course) => {
        console.log(response);
        this.course = response;
      }
    )
  }

}
