import { Component, OnInit } from '@angular/core';
import { ProtegeDto } from 'src/app/models/ProtegeDto';
import { ProtegeService } from 'src/app/services/ProtegeService';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-protege',
  templateUrl: './form-protege.component.html',
  styleUrls: ['./form-protege.component.scss'],
})

export class FormProtegeComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formProtege';
  pDto: ProtegeDto;
  constructor(private protegeService: ProtegeService, private messageService: MessageService) {
    this.pDto = new ProtegeDto();
  }

  ngOnInit() { }
  /**
   * Ajouter un Protege
   */
  ajouter() {
    const obs = this.protegeService.ajouter(this.pDto);
    obs.subscribe((result) => {
      this.messageService.sendData(this.QUEUE_MESSAGES_KEY, this.pDto);
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

