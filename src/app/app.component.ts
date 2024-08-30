import { Component,OnInit } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { NotificationComponent } from './notification/notification.component';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent /*implements OnInit */{
  notificationMessage: string='';
  title = 'vente_voiture_front';
  logged:boolean=false;

  constructor(private router:Router,private authService: AuthService/*private notificationservice: NotificationService*/) {}

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
    
    this.authService.logout();
    this.logged=false;
    this.router.navigate(['/login']);
  }
  else 
  {
    this.router.navigate(['/login']);
  }
  
 }

}
