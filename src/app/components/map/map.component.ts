import { Component, OnInit } from '@angular/core';
import { Injectable, NgZone } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MapService } from 'src/app/services/MapService';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private zone: NgZone,
    private navCtrl: NavController,
    private MapApi: MapService,
  ) {
  }

  async buttonClick() {
    const alert = await this.alertCtrl.create({
      header: 'Test',
      message: 'Message test',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.zone.run(async () => {
              await this.navCtrl.navigateForward("/");
            });
          }
        }
      ]
    });

    await alert.present();


  }
  ngOnInit() { }
  geo() {
    this.MapApi.geocode();
  }
}
