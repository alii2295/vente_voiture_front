import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vente_voiture_front';
  logged = false;

  constructor(private router: Router, private authService: AuthService) {}

<<<<<<< HEAD
  /*ngOnInit(): void {
    // Exemple : Afficher une notification au chargement de la page
    this.notificationMessage = 'Bienvenue sur notre site!';
    this.notificationservice.showNotification(this.notificationMessage);
  }*/
 ngOnInit():void {
  if (this.authService.isLoggedIn)
  {this.logged=true;}
   }


 logout()
 {
  if (this.authService.isLoggedIn)
  {
    
=======
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.logged = isLoggedIn;
    });
  }
//////////////////////
  logout() {
>>>>>>> 00ab6a4212bc8f015d670b7694fcbe492983f2c8
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
