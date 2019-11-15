import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// The above import statement is added
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, circle } from 'leaflet';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
// The above import statement is added

@Component({
  selector: 'app-pickup-location',
  templateUrl: './pickup-location.page.html',
  styleUrls: ['./pickup-location.page.scss']
})
export class PickupLocationPage {
  map: Map;
  newMarker: any;
  circle: any;
  address: string[];

  constructor(private geocoder: NativeGeocoder, private router: Router, private geolocation: Geolocation) { }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    this.map = new Map('mapId').setView([17.385, 78.4867], 13);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(this.map);

  }

  locatePosition() {
    this.map.locate({ setView: true }).on('locationfound', (e: any) => {
      this.newMarker = marker([e.latitude, e.longitude], {
        draggable: true
      }).addTo(this.map);
      this.newMarker.bindPopup('Vous etes ici!').openPopup();
      this.getAddress(e.latitude, e.longitude); // This line is added

      this.newMarker.on('dragend', () => {
        const position = this.newMarker.getLatLng();
        this.getAddress(position.lat, position.lng); // This line is added


      });
    });

  }

  //The function below is added
  getAddress(lat: number, long: number) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.geocoder.reverseGeocode(lat, long, options).then(results => {
      this.address = Object.values(results[0]).reverse();

    });
  }

  // The function below is added
  confirmPickupLocation() {
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      //data can be a set of coordinates, or an error (if an error occurred).
      console.log('Latitude =' + data.coords.latitude + 'Longitude = ' + data.coords.latitude);
    });
  }

  goBack() {
    this.router.navigate(['home']);
  }
  findAd() {
    this.map.locate({ setView: true }).on('locationfound', (e: any) => {
      this.newMarker = marker([50.631930, 3.066840], {
        draggable: false
      }
      ).addTo(this.map);
      this.circle = circle([50.631930, 3.066840], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: 50
      }).addTo(this.map);
      this.newMarker.bindPopup('Vous etes ici!').openPopup();
      this.getAddress(e.latitude, e.longitude); // This line is added

      this.newMarker.on('dragend', () => {
        const position = this.newMarker.getLatLng();
        this.getAddress(position.lat, position.lng);// This line is added


      });
    });

  }

}

