import { Component, OnInit, OnDestroy } from '@angular/core';
import { VeilleurDto } from 'src/app/models/VeilleurDto';
import { VeilleurService } from 'src/app/services/VeilleurService';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit, OnDestroy {
  QUEUE_MESSAGES_KEY = 'formInscription';
  private listeVeilleur: Array<VeilleurDto> = new Array();
  private subscription: any;
  private queueMessages: Observable<any>;

  constructor(private veilleurService: VeilleurService, private messageService: MessageService) { }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.QUEUE_MESSAGES_KEY);

    this.queueMessages.subscribe((veilleur: VeilleurDto) => {
      this.listeVeilleur.push(veilleur);
    });

    const obs = this.veilleurService.recupererListeVeilleur();
    obs.subscribe(resp => this.listeVeilleur = resp);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
