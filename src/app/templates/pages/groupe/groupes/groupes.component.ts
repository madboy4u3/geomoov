import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { GroupeDto } from 'src/app/models/GroupeDto';
import { GroupeService } from 'src/app/services/GroupeService';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';
import { SearchBarService } from 'src/app/services/SearchBarService';
import { NavController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.scss'],
})
export class GroupesComponent implements OnInit, OnDestroy {
  QUEUE_MESSAGES_KEY = 'formGroupe';
  private listeGroupes: Array<GroupeDto> = [];
  private subscription: any;
  private queueMessages: Observable<any>;
  // tslint:disable-next-line: variable-name
  private _isShow = true;
  public searchTerm = '';
  private liste: Array<GroupeDto> = [];
  http: any;
  URL: string;
  gDto: GroupeDto;

  constructor(private groupeService: GroupeService,
    private messageService: MessageService,
    private searchBarService: SearchBarService,
    private navCtrl: NavController,
    private route: Router) {

  }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.QUEUE_MESSAGES_KEY);

    this.queueMessages.subscribe((groupe: GroupeDto) => {
      this.listeGroupes.push(groupe);
    });

    const obs = this.groupeService.recupererListeGroupes();
    obs.subscribe(resp => {
      this.listeGroupes = resp;
      this.liste = resp;
      console.log(this.listeGroupes);

    });

    this.setFilteredItems();

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  show() {
    console.log(this._isShow);
    this._isShow = !this._isShow;
    if (this._isShow === false) {
      this.route.navigateByUrl('/groupe');
    }
  }

  // Search Bar
  setFilteredItems() {

    this.listeGroupes = this.searchBarService.filterItems(this.searchTerm, this.liste);

  }

  setSearchTerm(term) {
    this.searchTerm = term;
  }


  suprimer(id: number) {

  }
  /* delete() {
     if (confirm(`Êtes-vous sûr de vouloir supprimer le groupe $ {gDto._titre}. Cela ne peut pas être annulé .`)) {
       this.groupeService.deleteGroupe(this.gDto.id);
     }
   } */
}
