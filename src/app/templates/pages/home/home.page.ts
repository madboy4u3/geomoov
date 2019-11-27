import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupeDto } from 'src/app/models/GroupeDto';
import { MessageService } from 'src/app/helpers/MessageService';
import { Observable } from 'rxjs';
import { GroupeService } from 'src/app/services/GroupeService';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  QUEUE_MESSAGES_KEY = 'formGroupe';
  private listeGroupes: Array<GroupeDto> = [];
  private queueMessages: Observable<any>;
  private liste;
  pickupLocation: string;
  constructor(private router: Router, private route: ActivatedRoute,
    private messageService: MessageService, private groupeService: GroupeService, private alertCtrl: AlertController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pickupLocation = this.router.getCurrentNavigation().extras.state.pickupLocation;
      }
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
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
  }
  onpickupClick() {
    this.router.navigate(['pickup-location']);
  }

  showConfirm() {
    this.alertCtrl.create({
      header: 'Message SOS',
      message: 'Au secours  SVP! J\'ai besoin d\'aide.',
      buttons: [
        {
          text: 'Envoyer',
          handler: () => {
            console.log('Envoyer');
          }

        },
        {
          text: 'Ignorer',
          handler: () => {
            console.log('Ignorer');
          }

        }
      ]
    }).then(alert => alert.present());
  }

}
