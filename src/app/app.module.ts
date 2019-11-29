import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { GroupesComponent } from './templates/pages/groupe/groupes/groupes.component';
import { FormGroupeComponent } from './components/form-groupe/form-groupe.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutergroupeComponent } from './templates/pages/groupe/ajoutergroupe/ajoutergroupe.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './helpers/MessageService';
import { MenuComponent } from './templates/layouts/menu/menu.component';
import { ProtegesComponent } from './templates/pages/protege/proteges/proteges.component';
import { FormProtegeComponent } from './components/form-protege/form-protege.component';
import { FormParcoursComponent } from './components/form-parcours/form-parcours.component';
import { AjouterParcoursComponent } from './templates/pages/mesparcours/ajouter-parcours/ajouter-parcours.component';
import { ParcoursComponent } from './templates/pages/mesparcours/parcours/parcours.component';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { HomePage } from './templates/pages/home/home.page';
import { HomePageModule } from './templates/pages/home/home.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { AffichergroupeComponent } from './templates/pages/groupe/affichergroupe/affichergroupe.component';
import { AjouterprotegeComponent } from './templates/pages/protege/ajouterprotege/ajouterprotege.component';
import { FormInscriptionComponent } from './components/form-inscription/form-inscription.component';
import { PageAccueilPage } from './templates/pages/page-accueil/page-accueil.page';
import { InscriptionComponent } from './templates/pages/inscription/inscription/inscription.component';
import { CompteProtegeComponent } from './templates/pages/compteProtege/compteProtege.component';
import { AlerteComponent } from './templates/pages/alertes/alerte/alerte.component';
import { AfficherAlerteComponent } from './templates/pages/alertes/afficher-alerte/afficher-alerte.component';
import { AfficherMapComponent } from './templates/pages/map/afficher-map/afficher-map.component';
import { MapComponent } from './components/map/map.component';
import { MaterialModule } from './components/map/material-module';
import { } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatAutocompleteModule } from '@angular/material';
@NgModule({
  declarations: [AppComponent, GroupesComponent, FormGroupeComponent, AjoutergroupeComponent, MenuComponent, ProtegesComponent,
    FormProtegeComponent, FormParcoursComponent, AjouterParcoursComponent, ParcoursComponent, AffichergroupeComponent, InscriptionComponent,
    FormInscriptionComponent, PageAccueilPage, InscriptionComponent, AjouterprotegeComponent,
    CompteProtegeComponent, AlerteComponent, AfficherAlerteComponent, AfficherMapComponent, MapComponent],
  entryComponents: [HomePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HomePageModule,
    TagInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatRadioModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule],
  providers: [
    Geolocation,
    StatusBar,

    CommonModule,

    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeGeocoder,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
