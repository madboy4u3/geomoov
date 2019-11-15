import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { GroupeDto } from 'src/app/models/GroupeDto';
import { GroupeService } from 'src/app/services/GroupeService';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.scss'],
})
export class GroupesComponent implements OnInit, OnDestroy {
  QUEUE_MESSAGES_KEY = 'formGroupe';
  private listeGroupes: Array<GroupeDto>;
  private subscription: any;
  private queueMessages: Observable<any>;
  private _isShow: boolean;


  constructor(private groupeService: GroupeService, private messageService: MessageService) { }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.QUEUE_MESSAGES_KEY);

    this.queueMessages.subscribe((groupe: GroupeDto) => {
      this.listeGroupes.push(groupe);
    });

    const obs = this.groupeService.recupererListeGroupes();
    obs.subscribe(resp => {
      this.listeGroupes = resp;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public get isShow(): boolean {
    return this._isShow;
  }
  public set isShow(value: boolean) {
    this._isShow = value;
  }

  show() {
    console.log(this._isShow);
    this._isShow = !this._isShow;
  }
}
