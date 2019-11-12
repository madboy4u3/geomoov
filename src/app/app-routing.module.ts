import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GroupesComponent } from './templates/pages/groupe/groupes/groupes.component';
import { AjoutergroupeComponent } from './templates/pages/groupe/ajoutergroupe/ajoutergroupe.component';
import { ProtegesComponent } from './templates/pages/proteges/proteges.component';
import { ParcoursComponent } from './templates/pages/mesparcours/parcours/parcours.component';
import { AjouterParcoursComponent } from './templates/pages/mesparcours/ajouter-parcours/ajouter-parcours.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./templates/pages/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'groupes', component: GroupesComponent,
    children: [
      {
        path: 'ajouter', component: AjoutergroupeComponent
      }
    ]
  },
  {
    path: 'parcours', component: ParcoursComponent,
    children: [
      {
        path: 'ajouter', component: AjouterParcoursComponent
      }
    ]
  },
  { path: 'proteges', component: ProtegesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }