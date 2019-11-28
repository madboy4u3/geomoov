import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParcoursDto } from 'src/app/models/ParcoursDto';
import { Observable } from 'rxjs';
import { ParcoursService } from 'src/app/services/ParcoursService';
import { MessageService } from 'src/app/helpers/MessageService';
import { ActivatedRoute } from '@angular/router';
import { SearchBarService } from 'src/app/services/SearchBarService';

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
  private _id: number;
  public searchTerm = '';
  private liste: Array<ParcoursDto> = [];

  constructor(private parcoursService: ParcoursService, private searchBarService: SearchBarService,
    private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.QUEUE_MESSAGES_KEY);

    this.queueMessages.subscribe((parcours: ParcoursDto) => {
      this.listeParcours.push(parcours);
    });
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    const obs = this.parcoursService.recupererListeParcours(this.id);
    obs.subscribe(resp => {
      this.listeParcours = resp;
      console.log(this.listeParcours);

    });

    this.setFilteredItems();
  }


  // Search Bar
  setFilteredItems() {

    this.listeParcours = this.searchBarService.filterNom(this.searchTerm, this.liste);

  }

  setSearchTerm(term) {
    this.searchTerm = term;
  }


  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
