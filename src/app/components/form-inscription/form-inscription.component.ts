import { Component, OnInit } from '@angular/core';
import {VeilleurDto} from 'src/app/models/VeilleurDto';
import {VeilleurService} from 'src/app/services/VeilleurService';
import { MessageService } from 'src/app/helpers/MessageService';
@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.scss'],
})
// je suis un commentaire inutile
export class FormInscriptionComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formInscription';
  veilleurDto: VeilleurDto;

  constructor(private veilleurService: VeilleurService, private messageService: MessageService, ) {
    this.veilleurDto = new VeilleurDto();
  }

  ngOnInit() {}

   /**
    * Ajouter un veilleur
    */
  ajouter() {
    const obs = this.veilleurService.ajouter(this.veilleurDto);
    obs.subscribe((result) => {
      this.messageService.sendData(this.QUEUE_MESSAGES_KEY, this.veilleurDto);
      console.log(result);
    });
  }
    /**
   * Modifier un veilleur
   * @param veilleur VeilleurDto
   */
  modifier(veilleurDto: VeilleurDto) { }
  /**
   * Supprimer un veileur
   * @param id number
   */
  suprimer(id: number) { }
}