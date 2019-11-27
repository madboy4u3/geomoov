import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';
import { AlerteDto } from 'src/app/models/AlerteDto';
import { AlerteService } from 'src/app/services/AlerteService';
import { ActivatedRoute } from '@angular/router';
import { VeilleurService } from 'src/app/services/VeilleurService';
import { SearchBarService } from 'src/app/services/SearchBarService';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.scss'],
})
export class AlerteComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formGroupe';
  listeAlertes: AlerteDto[];
  private queueMessages: Observable<any>;
  // tslint:disable-next-line: variable-name
  private _id: number;
  alerte: AlerteDto;
  veilleur: AlerteDto[];
  private liste: Array<AlerteDto> = [];
  public searchTerm = '';
  constructor(private veilleurService: VeilleurService,
    private messageService: MessageService, private route: ActivatedRoute,
    private searchBarService: SearchBarService,
    private navCtrl: NavController) { }

  ngOnInit() {

    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    const obs2 = this.veilleurService.recupererAlertes(this.id);
    obs2.subscribe(resp => {
      this.listeAlertes = resp;
      //this.liste = resp;

    });

    this.setFilteredItems();

  }

  // Search Bar
  setFilteredItems() {

    this.listeAlertes = this.searchBarService.filterItems(this.searchTerm, this.liste);

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
