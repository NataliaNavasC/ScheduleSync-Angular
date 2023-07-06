import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';
import { UserService } from 'src/app/services/user/user.service';
import { LoginDTO } from 'src/model/LoginDTO';
import { User } from 'src/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  public user:LoginDTO;
  public invalidCredentials:boolean;

  constructor(public sessionService:SessionService, public userService:UserService){
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
              localStorage.setItem("user",res.username);
              sessionStorage.setItem('role', res.role);
              // this.router.navigate(['home']);
              console.log("Navigate to next home page");
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
