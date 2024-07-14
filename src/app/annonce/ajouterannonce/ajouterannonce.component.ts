import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouterannonce',
  templateUrl: './ajouterannonce.component.html',
  styleUrls: ['./ajouterannonce.component.css']
})

export class AjouterannonceComponent {
  constructor(private router:Router)
  {
   
  }
  /*redirectToAjouterannonce()
  {
    this.router.navigate(['/ajouterannonce']);
  }*/

}
