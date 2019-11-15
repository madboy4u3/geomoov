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
import { FormsModule } from '@angular/forms';
import { AjoutergroupeComponent } from './templates/pages/groupe/ajoutergroupe/ajoutergroupe.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './helpers/MessageService';
import { MenuComponent } from './templates/layouts/menu/menu.component';
import { ProtegesComponent } from './templates/pages/proteges/proteges.component';
import { FormProtegeComponent } from './components/form-protege/form-protege.component';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [AppComponent, GroupesComponent, FormGroupeComponent, AjoutergroupeComponent, MenuComponent, ProtegesComponent,
    FormProtegeComponent,

  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeGeocoder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
