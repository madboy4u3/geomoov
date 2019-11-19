import { Component, OnInit } from '@angular/core';
import { GroupeDto } from 'src/app/models/GroupeDto';
import { GroupeService } from 'src/app/services/GroupeService';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affichergroupe',
  templateUrl: './affichergroupe.component.html',
  styleUrls: ['./affichergroupe.component.scss'],
})
export class AffichergroupeComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formGroupe';

  private listeGroupes: Array<GroupeDto> = [];
  groupe: GroupeDto = new GroupeDto();
  private subscription: any;
  private queueMessages: Observable<any>;
  private id: number;
  constructor(private groupeService: GroupeService, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.QUEUE_MESSAGES_KEY);

    this.queueMessages.subscribe((groupe: GroupeDto) => {
      this.listeGroupes.push(groupe);
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


  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
