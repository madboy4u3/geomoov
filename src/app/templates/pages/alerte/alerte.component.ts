import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';
import { AlerteDto } from 'src/app/models/AlerteDto';
import { AlerteService } from 'src/app/services/AlerteService';

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.scss'],
})
export class AlerteComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formGroupe';
  private listeAlertes: Array<AlerteDto> = [];
  private queueMessages: Observable<any>;
  constructor(private alerteService: AlerteService, private messageService: MessageService, ) { }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.QUEUE_MESSAGES_KEY);
    console.log(this.queueMessages.forEach);
    this.queueMessages.subscribe((alerte: AlerteDto) => {
      this.listeAlertes.push(alerte);
    });

    const obs = this.alerteService.recupererListeAlertes();
    obs.subscribe(resp => {
      this.listeAlertes = resp;
    });

  }

}
