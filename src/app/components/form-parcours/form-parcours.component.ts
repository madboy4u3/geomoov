import { Component, OnInit } from '@angular/core';
import { ParcoursDto } from 'src/app/models/ParcoursDto';
import { ParcoursService } from 'src/app/services/ParcoursService';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-parcours',
  templateUrl: './form-parcours.component.html',
  styleUrls: ['./form-parcours.component.scss'],
})
export class FormParcoursComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formParcours';
  parcoursDto: ParcoursDto;

  constructor(private parcoursService: ParcoursService, private messageService: MessageService) {
    this.parcoursDto = new ParcoursDto();
  }

  ngOnInit() {
  }

  /**
   * Ajouter un parcours
   */
  ajouterParcours() {
    const obs = this.parcoursService.ajouter(this.parcoursDto);
    obs.subscribe((result) => {
      this.messageService.sendData(this.QUEUE_MESSAGES_KEY, this.parcoursDto);
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
}


