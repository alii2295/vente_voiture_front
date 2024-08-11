import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private router:Router,private userservice:UserService)
  {
    this.router=router;
  }

  nouvelleuser = {
    id:0,
    nom:'',
    prenom:'',
    password:'',
    email:''
    };
  ajouteruser():void
  {
    const datauser = {
      nom:this.nouvelleuser.nom,
      prenom:this.nouvelleuser.prenom,
      password:this.nouvelleuser.password,
      email:this.nouvelleuser.email
    };
    console.log(datauser);
  
    this.userservice.createUser(datauser).subscribe(() => {
      this.router.navigate(['/accueil']);
    }, error => {
      console.error('Error creating user:', error);
    });
  }
}
