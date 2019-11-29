import { Component, OnInit, OnChanges } from '@angular/core';
import { MapService } from 'src/app/services/MapService';
import { MapApiDto } from 'src/app/models/MapApiDto';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  adresse: MapApiDto;
  add: string;
  isShown = true;
  selectedAd = '';
  protected searchStr: string;
  protected captain: string;
  private searchData: MapApiDto[] = [];

  addApi: string[] = [];

  constructor(
    private MapApi: MapService
  ) {
  }


  ngOnInit() {

  }

  geo(event: any) {

    const obs4 = this.MapApi.getApiMap(this.add = event.target.value);
    console.log(this.add);
    obs4.subscribe(resp => {
      this.adresse = resp;
      this.addApi = [];
      this.searchData = this.adresse.features;
      //this.adresse.features.forEach(v => console.log(v.properties.label));
      this.adresse.features.forEach(v => this.addApi.push(v.properties.label));
      //this.adresse.features.forEach(v => console.log(v.geometry.coordinates));
    });
  }

  addApiInput(res) {
    console.log(res);
    this.isShown = true;
    this.selectedAd = res;

  }

  show() {
    this.isShown = !this.isShown;
  }
}
