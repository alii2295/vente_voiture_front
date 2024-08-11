import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn=false;
redirecturl:string='';
  constructor(private http:HttpClient,private notificationservice:NotificationService) 
  {}
  login(credentials: any): Observable <boolean> {
    // Simuler une requête HTTP de connexion réussie
    return of(true).pipe(
      tap(() => {
        this.isLoggedIn = true ;
        this.notificationservice.showNotification('Connexion réussie');
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    // Autres opérations de déconnexion
  }
}
