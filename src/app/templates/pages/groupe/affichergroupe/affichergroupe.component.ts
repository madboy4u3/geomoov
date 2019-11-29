import { Component, OnInit } from '@angular/core';
import { GroupeDto } from 'src/app/models/GroupeDto';
import { GroupeService } from 'src/app/services/GroupeService';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ParcoursDto } from 'src/app/models/ParcoursDto';
import { ProtegeDto } from 'src/app/models/ProtegeDto';

@Component({
  selector: 'app-affichergroupe',
  templateUrl: './affichergroupe.component.html',
  styleUrls: ['./affichergroupe.component.scss'],
})
export class AffichergroupeComponent implements OnInit {
  MSG_KEY_GROUPE = 'formGroupe';
  MSG_KEY_PROTEGE = 'formProtege';
  MSG_KEY_PARCOUR = 'formParcours';

  private listeGroupes: Array<GroupeDto> = [];
  private listeParcours: Array<ParcoursDto> = [];
  private listeProteges: Array<ProtegeDto> = [];
  groupe: GroupeDto = new GroupeDto();
  parcours: ParcoursDto = new ParcoursDto();
  proteges: ProtegeDto = new ProtegeDto();
  private subscription: any;
  private queueMessages: Observable<any>;
  private queueMessages1: Observable<any>;
  // tslint:disable-next-line: variable-name
  private id: number;
  constructor(private groupeService: GroupeService, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.MSG_KEY_GROUPE);
    this.queueMessages.subscribe((groupe: GroupeDto) => {
      this.listeGroupes.push(groupe);
    });
    this.queueMessages = this.messageService.getMessagesQueues(this.MSG_KEY_PARCOUR);
    this.queueMessages.subscribe((parcours: ParcoursDto) => {
      this.listeParcours.push(parcours);
    });
    this.queueMessages = this.messageService.getMessagesQueues(this.MSG_KEY_PROTEGE);
    this.queueMessages.subscribe((proteges: ProtegeDto) => {
      console.log('cc2' + this.queueMessages);
      this.listeProteges.push(proteges);
    });

    const obs = this.groupeService.recupererListeGroupes();
    obs.subscribe(resp => {
      this.listeGroupes = resp;
    });
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    const obs2 = this.groupeService.recupererGroupes(this.id);
    obs2.subscribe(resp => {
      this.groupe = resp;
    });

    const obs3 = this.groupeService.recupererListeParcours(this.id);
    obs3.subscribe(resp => this.listeParcours = resp);

    const obs4 = this.groupeService.recupererListeProteges(this.id);
    obs4.subscribe(resp => {
      this.listeProteges = resp;
    });

    /*const obs5 = this.groupeService.deleteGroupe(this.id);
    obs5.subscribe(resp => {
      console.log(resp);
    });*/
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
