import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public appPages = [
    {
      title: 'Acceuil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mes protégés',
      url: '/proteges',
      icon: 'people',
    },
    {
      title: 'Mes groupes',
      url: '/groupes',
      icon: 'contacts',
    },
    {
      title: 'Mes parcours',
      url: '/parcours',
      icon: 'pin',
    },
    {
      title: 'Mes alertes',
      url: '/alertes',
      icon: 'alert',
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
