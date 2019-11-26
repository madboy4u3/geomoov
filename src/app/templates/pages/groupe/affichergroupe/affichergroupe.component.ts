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
  QUEUE_MESSAGES_KEY = 'formGroupe';

  private listeGroupes: Array<GroupeDto> = [];
  private listeParcours: Array<ParcoursDto> = [];
  private listeProteges: Array<ProtegeDto> = [];
  groupe: GroupeDto = new GroupeDto();
  parcours: ParcoursDto = new ParcoursDto();
  proteges: ProtegeDto = new ProtegeDto();
  private subscription: any;
  private queueMessages: Observable<any>;
  // tslint:disable-next-line: variable-name
  private _id: number;
  constructor(private groupeService: GroupeService, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.QUEUE_MESSAGES_KEY);
    console.log(this.queueMessages.forEach);
    this.queueMessages.subscribe((groupe: GroupeDto) => {
      this.listeGroupes.push(groupe);
    });
    this.queueMessages.subscribe((parcours: ParcoursDto) => {
      this.listeParcours.push(parcours);
    });

    this.queueMessages.subscribe((proteges: ProtegeDto) => {
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
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
