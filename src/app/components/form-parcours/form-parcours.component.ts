import { Component, OnInit } from '@angular/core';
import { ParcoursDto } from 'src/app/models/ParcoursDto';
import { ParcoursService } from 'src/app/services/ParcoursService';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';
import { MapService } from 'src/app/services/MapService';
import { MapApiDto } from 'src/app/models/MapApiDto';


@Component({
  selector: 'app-form-parcours',
  templateUrl: './form-parcours.component.html',
  styleUrls: ['./form-parcours.component.scss'],
})
export class FormParcoursComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formParcours';
  parcoursDto: ParcoursDto;
  private id: number;

  adresse: MapApiDto;
  add: string;
  isShown = true;
  isShown2 = true;
  searchData: MapApiDto[] = [];

  addApi: string[] = [];
  addApi2: string[] = [];

  constructor(private parcoursService: ParcoursService, private messageService: MessageService, private activatedRoute: ActivatedRoute,
    private MapApi: MapService) {
    this.parcoursDto = new ParcoursDto();
  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  /**
   * Ajouter un parcours
   */
  ajouterParcours() {
    this.parcoursDto.groupeId = this.id;
    const obs = this.parcoursService.ajouter(this.parcoursDto);
    obs.subscribe((result) => {
      this.messageService.sendData(this.QUEUE_MESSAGES_KEY, result);
      console.log(result);
    });
  }
  /**
   * Modifier un parcours
   * @param parcours ParcoursDto
   */
  modifier(parcours: ParcoursDto) { }
  /**
   * Supprimer un parcours
   * @param id number
   */
  suprimer(id: number) { }

  geo(event: any) {

    const obs4 = this.MapApi.getApiMap(this.add = event.target.value);
    console.log(this.add);
    obs4.subscribe(resp => {
      this.adresse = resp;
      this.addApi = [];
      this.searchData = this.adresse.features;
      this.adresse.features.forEach(v => this.addApi.push(v.properties.label));
    });
  }

  geo2(event: any) {

    const obs4 = this.MapApi.getApiMap(this.add = event.target.value);
    console.log(this.add);
    obs4.subscribe(resp => {
      this.adresse = resp;
      this.addApi2 = [];
      this.searchData = this.adresse.features;
      this.adresse.features.forEach(v => this.addApi2.push(v.properties.label));
    });
  }

  show() {
    this.isShown = !this.isShown;
  }

  show2() {
    this.isShown2 = !this.isShown2;
  }

  addApiInput(res) {
    console.log(res);
    this.isShown = true;
    this.parcoursDto.adresseDepart = res;

  }

  addApiInput2(res1) {
    console.log(res1);
    this.isShown2 = true;
    this.parcoursDto.adresseArrivee = res1;

  }
}


