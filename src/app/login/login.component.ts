import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  errorMessage:string='';
  constructor(private router:Router,private userservice:UserService)
  {
  }
  verif_login()
  {
    this.userservice.getListUsers().subscribe(users=>{
      const user=users.find(u=>u.email===this.email && u.password===this.password);
      if (user) {
        console.log('connecté avec succès');
        this.router.navigate(["/accueil"]);
        
      }
      else {
        this.errorMessage='mot de passe ou email incorrecte';
      }
    });

    

  }


}
