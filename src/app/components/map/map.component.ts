import { Component, OnInit } from '@angular/core';
import { Injectable, NgZone } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MapService } from 'src/app/services/MapService';
import { MapApiDto } from 'src/app/models/MapApiDto';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  adresse: MapApiDto[] = [];
  add: string;
  constructor(
    private alertCtrl: AlertController,
    private zone: NgZone,
    private navCtrl: NavController,
    private MapApi: MapService,
  ) {

  }

  ngOnInit() { }

  geo() {
    const obs4 = this.MapApi.getApiMap(this.add = '80 rue de la digue valenciennes 59300');
    obs4.subscribe(resp => {
      this.adresse = resp;
      console.log(this.adresse);
    });
  }


}
