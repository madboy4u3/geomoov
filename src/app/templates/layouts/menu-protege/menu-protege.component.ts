import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-protege',
  templateUrl: './menu-protege.component.html',
  styleUrls: ['./menu-protege.component.scss'],
})
export class MenuProtegeComponent implements OnInit {
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

  // tslint:disable-next-line: member-ordering
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
  // tslint:disable-next-line: member-ordering
  route: string;
  title: string;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
