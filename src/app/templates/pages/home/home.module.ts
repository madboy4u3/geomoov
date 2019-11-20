import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from './home.page';


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageModule
      }
    ])
  ],
  exports: [CommonModule,
    FormsModule,
    HomePage,
    IonicModule],
})
export class HomePageModule {

}
