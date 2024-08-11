import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterannonceComponent } from './annonce/ajouterannonce/ajouterannonce.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailleannonceComponent } from './annonce/detailleannonce/detailleannonce.component';
import { ModifierannonceComponent } from './annonce/modifierannonce/modifierannonce.component';
import { SupprimerannonceComponent } from './annonce/supprimerannonce/supprimerannonce.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {path: 'ajouterannonce',component: AjouterannonceComponent},
  {path: 'inscription',component: InscriptionComponent},
  {path: 'accueil',component:AccueilComponent},
  {path: 'detailleannonce/:id',component:DetailleannonceComponent},
  {path: 'modifierannonce/:id',component:ModifierannonceComponent},
  {path: 'supprimerannonce',component:SupprimerannonceComponent},
  {path: 'login',component:LoginComponent},
  {path:'notification',component:NotificationComponent}
  
];
//{path: '/rihab',component: AjouterannonceComponent,pathMatch: 'full'}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
