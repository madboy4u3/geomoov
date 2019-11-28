import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

/**
 * Création de menu
 */
export class MenuComponent implements OnInit {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mes protégés',
      url: 'proteges/1/list',
      icon: 'people',
    },
    {
      title: 'Mes groupes',
      url: '/groupe',
      icon: 'contacts',
    },
    {
      title: 'Mes parcours',
      url: 'parcours/1/list',
      icon: 'pin',
    },
    {
      title: 'Mes alertes',
      url: '1/alertes',
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


/* public appPages = [
   {
     title: 'Acceuil',
     url: '/accueilProtege',
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

} */