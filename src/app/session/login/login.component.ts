import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  public user:User;
  public session:SessionService;

  constructor(public sessionService:SessionService){
    this.user = new User(0,"", "",false,false); 
    this.session = sessionService;
  }

  public login(){
    this.sessionService.login(this.user).subscribe( (resp) => {
      console.log(resp);
    });
  }
}
