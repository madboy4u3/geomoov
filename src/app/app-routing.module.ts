import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GroupesComponent } from './templates/pages/groupes/groupes.component';
import { AjoutergroupeComponent } from './templates/pages/ajoutergroupe/ajoutergroupe.component';
//import { AfficherComponent } from 'src/components/groupe/afficher/afficher.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./templates/pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'groupe', component: GroupesComponent,
    children: [
      {
        path: 'ajouter', component: AjoutergroupeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }