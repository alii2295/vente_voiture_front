import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterannonceComponent } from './annonce/ajouterannonce/ajouterannonce.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path: 'ajouterannonce',component: AjouterannonceComponent},
  {path: 'inscription',component: InscriptionComponent}
];
//{path: '/rihab',component: AjouterannonceComponent,pathMatch: 'full'}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
