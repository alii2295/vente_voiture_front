import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterannonceComponent } from './annonce/ajouterannonce/ajouterannonce.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailleannonceComponent } from './annonce/detailleannonce/detailleannonce.component';
import { ModifierannonceComponent } from './annonce/modifierannonce/modifierannonce.component';

const routes: Routes = [
  {path: 'ajouterannonce',component: AjouterannonceComponent},
  {path: 'inscription',component: InscriptionComponent},
  {path: 'accueil',component:AccueilComponent},
  {path: 'detailleannonce/:matricule',component:DetailleannonceComponent},
  {path: 'modifierannonce/:matricule',component:ModifierannonceComponent}
  
];
//{path: '/rihab',component: AjouterannonceComponent,pathMatch: 'full'}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
