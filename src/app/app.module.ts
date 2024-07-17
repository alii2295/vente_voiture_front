import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GestionannonceComponent } from './annonce/gestionannonce/gestionannonce.component';
import { AjouterannonceComponent } from './annonce/ajouterannonce/ajouterannonce.component';
import { SupprimerannonceComponent } from './annonce/supprimerannonce/supprimerannonce.component';
import { ModifierannonceComponent } from './annonce/modifierannonce/modifierannonce.component';
import {HttpClientModule} from '@angular/common/http';
import { formatCurrency } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    GestionannonceComponent,
    AjouterannonceComponent,
    SupprimerannonceComponent,
    ModifierannonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
