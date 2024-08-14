import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  nouvelleuser: User = {
    id: '',
    nom: '',
    prenom: '',
    password: '',
    email: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  ajouteruser(): void {
    this.authService.signup(this.nouvelleuser).subscribe(() => {
      console.log('Utilisateur créé avec succès');
      this.router.navigate(['/login']);
    }, error => {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
    });
  }
}
