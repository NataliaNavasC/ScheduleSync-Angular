import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/userServices/session/session.service';
import { UserService } from 'src/app/services/userServices/user/user.service';
import { LoginDTO } from 'src/model/User/LoginDTO';
import { User } from 'src/model/User/User';
import { RoleEnum } from 'src/utils/RoleEnum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  public user:LoginDTO;
  public invalidCredentials:boolean;

  constructor(public sessionService:SessionService, public userService:UserService, public router:Router){
    this.user = new LoginDTO(); 
    this.invalidCredentials = false;
  }

  public login(){
    this.sessionService.login(this.user).subscribe( (resp) => {
      sessionStorage.setItem('token', resp.headers.get('Authorization') || "");
      if(this.loginSuccess())
      {
        let user = this.userService.findByUsername(this.user.username).subscribe(
          (res:User) => {
            if(res!=null){
              sessionStorage.setItem("user",res.username);
              sessionStorage.setItem('role', res.role);
              if(res.role == RoleEnum.STUDENT){
                sessionStorage.setItem('courseId', res.course.id.toString());
                this.router.navigate(['student-session']);
              }else if(res.role == RoleEnum.TEACHER){
                this.router.navigate(['scheduled-session']);
              }
            }
          });
      }else{
        this.invalidCredentials = true;
      }
    });
  }


  private loginSuccess(){
    let token:string = sessionStorage.getItem('token') || "";
    if(token === ""){
      return false;
    }
    return true;
  }
}
