import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParcoursDto } from 'src/app/models/ParcoursDto';
import { Observable } from 'rxjs';
import { ParcoursService } from 'src/app/services/ParcoursService';
import { MessageService } from 'src/app/helpers/MessageService';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss'],
})
export class ParcoursComponent implements OnInit, OnDestroy {

  QUEUE_MESSAGES_KEY = 'formParcours';
  private listeParcours: Array<ParcoursDto>;
  private subscription: any;
  private queueMessages: Observable<any>;

  constructor(private parcoursService: ParcoursService, private messageService: MessageService) { }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.QUEUE_MESSAGES_KEY);

    this.queueMessages.subscribe((parcours: ParcoursDto) => {
      this.listeParcours.push(parcours);
    });

    const obs = this.parcoursService.recupererListeParcours();
    obs.subscribe(resp => this.listeParcours = resp);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
