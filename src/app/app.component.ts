import { Component,OnInit } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent /*implements OnInit */{
  notificationMessage: string='';
  title = 'vente_voiture_front';

  constructor(/*private notificationservice: NotificationService*/) {}

  /*ngOnInit(): void {
    // Exemple : Afficher une notification au chargement de la page
    this.notificationMessage = 'Bienvenue sur notre site!';
    this.notificationservice.showNotification(this.notificationMessage);
  }*/
}
