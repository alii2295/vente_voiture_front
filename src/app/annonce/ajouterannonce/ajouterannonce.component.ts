import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-ajouterannonce',
  templateUrl: './ajouterannonce.component.html',
  styleUrls: ['./ajouterannonce.component.css']
})

export class AjouterannonceComponent {
  constructor(private router:Router,private annonceservice:AnnonceService)
  {
   
   
  }

  annonce:Annonce={}as Annonce
  nouvelleAnnonce = {
    id:0,
    model:'',
    matricule:'',
    kilometrage:0,
    carburant:'',
    photo:'',
}
createannonce():void
{
  this.annonceservice.createannonce(this.annonce).subscribe
  this.annonce={} as Annonce;

}
/*selectedFile: File | null = null;

 

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ajouterAnnonce(): void {
    const formData = new FormData();
    formData.append('model', this.nouvelleAnnonce.model);
    formData.append('matricule', this.nouvelleAnnonce.matricule);
    formData.append('kilometrage', this.nouvelleAnnonce.kilometrage.toString());
    formData.append('carburant', this.nouvelleAnnonce.carburant);
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile);
    }

    this.annonceservice.createannonce(formData).subscribe(() => {
      this.router.navigate(['/accueil']);
    });
  }*/
 

}
