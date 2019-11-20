import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GroupesComponent } from './templates/pages/groupe/groupes/groupes.component';
import { AjoutergroupeComponent } from './templates/pages/groupe/ajoutergroupe/ajoutergroupe.component';
import { ProtegesComponent } from './templates/pages/protege/proteges/proteges.component';
import { HomePage } from './templates/pages/home/home.page';
import { ParcoursComponent } from './templates/pages/mesparcours/parcours/parcours.component';
import { AjouterParcoursComponent } from './templates/pages/mesparcours/ajouter-parcours/ajouter-parcours.component';
import { AffichergroupeComponent } from './templates/pages/groupe/affichergroupe/affichergroupe.component';

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
  { path: 'groupe/afficher/:id', component: AffichergroupeComponent, pathMatch: 'prefix' },
  { path: 'proteges', component: ProtegesComponent },
  { path: 'pickup-location', loadChildren: './templates/pages/pickup-location/pickup-location.module#PickupLocationPageModule' },
  {
    path: 'parcours', component: ParcoursComponent
  },
  { path: 'groupe/afficher/:id/add-parcour', component: AjouterParcoursComponent, pathMatch: 'prefix' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
