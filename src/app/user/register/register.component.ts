
import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/services/http-service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user! : User;
  public message ='';
  contructor(private httpService : HttpService,
    public messageService : MesageService,){
      this.user = new User('', '', '', '');
    }

 createUser(userForm: any){
    if(userForm){
      const user = this.user;
      if(user){
        this.message =
        'Đăng kí thành công tài khoản: '
              + this.user.username;
        this.httpService.postUser(user).subscribe((data)=>{
          console.log('postuser',data);})
      this.user = new User('','','','');
      }else{
        console.log('loi 1');
      }
    }else{
      console.log('loi 2');
    }

  }

}
