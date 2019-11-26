import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu-protege',
  templateUrl: './menu-protege.component.html',
  styleUrls: ['./menu-protege.component.scss'],
})
export class MenuProtegeComponent implements OnInit {

  public appPages = [
    {
      title: 'Acceuil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mes veilleurs',
      url: '/',
      icon: 'people',
    },
    {
      title: 'Mes groupes',
      url: '/',
      icon: 'contacts',
    },
    {
      title: 'Mes parcours',
      url: '/',
      icon: 'pin',
    },
    {
      title: 'Déconnexion',
      url: '/home',
      icon: 'power'
    },

  ];
  route: string;
  title: string;
  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = 'Accueil';
      }
      this.title = this.route.replace('/', '');
    });

  }

  ngOnInit() { }

}
