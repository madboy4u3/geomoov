import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/helpers/MessageService';
import { ActivatedRoute } from '@angular/router';
import { SearchBarService } from 'src/app/services/SearchBarService';
import { ProtegeDto } from 'src/app/models/ProtegeDto';
import { ProtegeService } from 'src/app/services/ProtegeService';

@Component({
  selector: 'app-proteges',
  templateUrl: './proteges.component.html',
  styleUrls: ['./proteges.component.scss'],
})
export class ProtegesComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formGroupe';
  listeProteges: ProtegeDto[];
  private queueMessages: Observable<any>;
  // tslint:disable-next-line: variable-name
  private _id: number;
  protege: ProtegeDto;
  private liste: Array<ProtegeDto> = [];
  public searchTerm = '';
  constructor(private messageService: MessageService, private route: ActivatedRoute,
    private searchBarService: SearchBarService, private protegeService: ProtegeService) { }

  ngOnInit() {
    this.queueMessages = this.messageService.getMessagesQueues(this.QUEUE_MESSAGES_KEY);

    this.queueMessages.subscribe((proteges: ProtegeDto) => {
      this.listeProteges.push(proteges);
    });

    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    const obs4 = this.protegeService.recupererListeProtege(this.id);
    obs4.subscribe(resp => {
      this.listeProteges = resp;
      this.liste = resp;
    });
    this.setFilteredItems();

  }
  // Search Bar
  setFilteredItems() {
    this.listeProteges = this.searchBarService.filterNom(this.searchTerm, this.liste);
  }

  setSearchTerm(term) {
    this.searchTerm = term;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
