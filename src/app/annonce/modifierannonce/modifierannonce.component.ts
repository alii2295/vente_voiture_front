import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { HttpErrorResponse } from '@angular/common/http';
import { AnnonceService } from 'src/app/services/annonce.service';




@Component({
  selector: 'app-modifierannonce',
  templateUrl: './modifierannonce.component.html',
  styleUrls: ['./modifierannonce.component.css']
})
export class ModifierannonceComponent {


  annonce: Annonce | undefined;
  annonces:Annonce[]=[];

  nouvelleAnnonce = {
    id: 0,
    model: '',
    matricule: '',
    kilometrage: 0,
    carburant: '',
    photo: ''
  };//instance de la base de données , initialisation de table ,obligatoire avant d'accèder au table de base de données
  selectedFile: File | null = null;

  constructor(private router: Router, private annonceService: AnnonceService,private route: ActivatedRoute,) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.getAnnonce();
  }
  getAnnonce(): void {
    const matricule = this.route.snapshot.paramMap.get('matricule');
    if (matricule) {
      this.annonceService.getAnnonceByMatricule(matricule).subscribe(
        (annonces: Annonce[]) => {
          if (annonces.length > 0) {
            this.annonce = annonces[0]; // Supposons que vous récupérez un seul élément par matricule
          } else {
            console.error(`Aucune annonce trouvée pour le matricule ${matricule}`);
          }
        },
        error => {
          console.error('Erreur lors de la récupération de l\'annonce : ', error);
          // Gérer l'erreur (affichage d'un message d'erreur, etc.)
        }
      );
    }
  }

  modifierAnnonce():void
  {
  if (this.nouvelleAnnonce.matricule)
  {
    this.annonceService.updateAnnonce(this.nouvelleAnnonce).subscribe(updateAnnonce=>{console.log('erro'),updateAnnonce});
  }


  }
}



/*
  modifierAnnonce(): void {
    const annonceData = {
      model: this.nouvelleAnnonce.model,
      matricule: this.nouvelleAnnonce.matricule,
      kilometrage: this.nouvelleAnnonce.kilometrage,
      carburant: this.nouvelleAnnonce.carburant,
      photo: this.selectedFile ? this.selectedFile.name : ''
    };
  
    console.log(annonceData);
  
    this.annonceService.updateAnnonce(annonce,annonces.matricule).subscribe(() => {
      this.router.navigate(['/accueil']);
    }, error => {
      console.error('Error creating annonce:', error);
    });
  }*/
  

  


