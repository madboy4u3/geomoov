import { Component, OnInit } from '@angular/core';
import { AlerteDto } from 'src/app/models/AlerteDto';
import { Observable } from 'rxjs';
import { VeilleurService } from 'src/app/services/VeilleurService';
import { MessageService } from 'src/app/helpers/MessageService';
import { ActivatedRoute } from '@angular/router';
import { AlerteService } from 'src/app/services/AlerteService';

@Component({
  selector: 'app-afficher-alerte',
  templateUrl: './afficher-alerte.component.html',
  styleUrls: ['./afficher-alerte.component.scss'],
})
export class AfficherAlerteComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formGroupe';
  alerte: AlerteDto;
  private _id: number;

  private queueMessages: Observable<any>;
  // tslint:disable-next-line: variable-name
  constructor(private alerteService: AlerteService,
    private messageService: MessageService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    const obs1 = this.alerteService.showAlertes(this.id);
    obs1.subscribe(resp => {
      this.alerte = resp;
    });
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

}
