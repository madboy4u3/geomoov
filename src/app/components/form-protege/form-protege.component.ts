import { Component, OnInit } from '@angular/core';
import { ProtegeDto } from 'src/app/models/ProtegeDto';
import { ProtegeService } from 'src/app/services/ProtegeService';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';
import { SurveillerProtegeDto } from 'src/app/models/SurveillerProtegeDto';


@Component({
  selector: 'app-form-protege',
  templateUrl: './form-protege.component.html',
  styleUrls: ['./form-protege.component.scss'],
})

export class FormProtegeComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formProtege';
  sPDto: SurveillerProtegeDto;
  id: number;
  constructor(private protegeService: ProtegeService, private messageService: MessageService, private activatedRoute: ActivatedRoute) {
    this.sPDto = new SurveillerProtegeDto();
  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.sPDto.groupeId = this.id;
  }
  /**
   * Ajouter un Protege
   */
  ajouter() {
    const obs = this.protegeService.ajouter(this.sPDto);
    obs.subscribe((result) => {
      this.messageService.sendData(this.QUEUE_MESSAGES_KEY, result);
      console.log(result);
    });
  }
  /**
   * Modifier un groupe
   * @param groupe GroupeDto
   */
  modifier(protege: ProtegeDto) { }
  /**
   * Supprimer un Groupe
   * @param id number
   */
  suprimer(id: number) { }
}

