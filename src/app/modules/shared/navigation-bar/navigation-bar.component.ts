import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  public courseId:number;

  constructor(public router:Router){
    this.courseId = Number(sessionStorage.getItem("courseId"));
  }

  public logout(){
    console.log("LOGOUT")
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("courseid");
    this.router.navigate(['']);
  }

}
