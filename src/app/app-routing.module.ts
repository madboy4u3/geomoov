import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GroupesComponent } from './templates/pages/groupe/groupes/groupes.component';
import { AjoutergroupeComponent } from './templates/pages/groupe/ajoutergroupe/ajoutergroupe.component';
import { ProtegesComponent } from './templates/pages/protege/proteges/proteges.component';
import { HomePage } from './templates/pages/home/home.page';
import { ParcoursComponent } from './templates/pages/mesparcours/parcours/parcours.component';
import { AjouterParcoursComponent } from './templates/pages/mesparcours/ajouter-parcours/ajouter-parcours.component';
import { AffichergroupeComponent } from './templates/pages/groupe/affichergroupe/affichergroupe.component';
import { InscriptionComponent } from './templates/pages/inscription/inscription/inscription.component';
import { AjouterprotegeComponent } from './templates/pages/protege/ajouterprotege/ajouterprotege.component';
import { PageAccueilPage } from './templates/pages/page-accueil/page-accueil.page';
import { MapComponent } from './components/map/map.component';
import { AfficherMapComponent } from './templates/pages/map/afficher-map/afficher-map.component';
import { CompteProtegeComponent } from './templates/pages/compteProtege/compteProtege.component';
import { AlerteComponent } from './templates/pages/alertes/alerte/alerte.component';
import { AfficherAlerteComponent } from './templates/pages/alertes/afficher-alerte/afficher-alerte.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  {
    path: 'groupe', component: GroupesComponent,
    children: [
      {
        path: 'ajouter', component: AjoutergroupeComponent
      },
    ]
  },
  // {    path: ':id/alertes', component: AlerteComponent,    children: [ {path: ':id/show', component: AfficherAlerteComponent},] },

  { path: 'groupe/afficher/:id', component: AffichergroupeComponent, pathMatch: 'prefix' },
  { path: 'proteges', component: ProtegesComponent },
  { path: 'proteges/:id/list', component: ProtegesComponent, pathMatch: 'prefix' },
  { path: 'pickup-location', loadChildren: './templates/pages/pickup-location/pickup-location.module#PickupLocationPageModule' },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'parcours/:id/list', component: ParcoursComponent, pathMatch: 'prefix' },
  { path: ':id/alertes', component: AlerteComponent },
  { path: 'alertes/:id/show', component: AfficherAlerteComponent },
  { path: 'groupe/afficher/:id/add-parcour', component: AjouterParcoursComponent, pathMatch: 'prefix' },
  { path: 'map', component: AfficherMapComponent, pathMatch: 'prefix' },
  { path: 'groupe/afficher/:id/add-protege', component: AjouterprotegeComponent, pathMatch: 'prefix' },
  { path: 'veilleur', component: InscriptionComponent },
  { path: 'page-accueil', loadChildren: './templates/pages/page-accueil/page-accueil.module#PageAccueilPageModule' },
  { path: 'accueil', component: PageAccueilPage },
  { path: 'protege', component: CompteProtegeComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
