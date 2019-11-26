import { Component, OnInit } from '@angular/core';
import { GroupeDto } from 'src/app/models/GroupeDto';
import { GroupeService } from 'src/app/services/GroupeService';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';
import { GroupesComponent } from 'src/app/templates/pages/groupe/groupes/groupes.component';


@Component({
  selector: 'app-form-groupe',
  templateUrl: './form-groupe.component.html',
  styleUrls: ['./form-groupe.component.scss'],
})
export class FormGroupeComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formGroupe';
  gDto: GroupeDto;
  // tslint:disable-next-line: variable-name
  private _isShow = true;

  constructor(private groupeService: GroupeService, private messageService: MessageService, private groupe: GroupesComponent) {
    this.gDto = new GroupeDto();
  }

  ngOnInit() {
  }

  /**
   * Ajouter un groupe
   */
  ajouter() {
    this.gDto.veilleurId = 1;
    const obs = this.groupeService.ajouter(this.gDto);
    obs.subscribe((result) => {
      this.messageService.sendData(this.QUEUE_MESSAGES_KEY, result);
      console.log(result);
      if (result != null) {
        this.groupe.show();
      }
    });
  }
  /**
   * Modifier un groupe
   * @param groupe GroupeDto
   */
  modifier(groupe: GroupeDto) { }
  /**
   * Supprimer un Groupe
   * @param id number
   */
  suprimer(id: number) { }


  show() {
    console.log(this._isShow);
    this._isShow = !this._isShow;
  }

}