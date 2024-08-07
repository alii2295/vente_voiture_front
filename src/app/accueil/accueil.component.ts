import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../model/annonce';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  annonces: Annonce[] = [];

  constructor(private router: Router, private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.annonceService.getListeAnnonces().subscribe(data => {
      this.annonces = data;
    });
  }

  redirectToDetails(id: string) {
    this.router.navigate(['/detailleannonce', id]);
  }

  supprimer(id: string):void 
  {
    this.annonceService.deleteAnnonce(id).subscribe(()=>[this.annonces=this.annonces.filter(Annonce=>Annonce.id!==id)]);
    this.router.navigate(['/accueil']);
  }
  edit(id:string):void
  {
    this.router.navigate(['/modifierannonce', id]);
  }

  
    
  }
  
  
  

