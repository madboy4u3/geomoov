import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlerteDto } from 'src/app/models/AlerteDto';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/helpers/MessageService';
import { AlerteService } from 'src/app/services/AlerteService';

@Component({
  selector: 'app-compteProtege',
  templateUrl: './compteProtege.component.html',
  styleUrls: ['./compteProtege.component.scss'],
})
export class CompteProtegeComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formGroupe';
  listeAlertes: AlerteDto[];
  msg: 'Au secours  SVP! J\'ai besoin d\'aide.';
  pickupLocation: string;
  mess: AlerteDto;
  constructor(private alertCtrl: AlertController,
    private router: Router, private route: ActivatedRoute,
    private messageService: MessageService, private alerteService: AlerteService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pickupLocation = this.router.getCurrentNavigation().extras.state.pickupLocation;
      }
    });
    this.mess = new AlerteDto();
  }

  ngOnInit() { }
  onpickupClick() {
    this.router.navigate(['pickup-location']);
  }


  showConfirm() {
    this.mess.message = 'Au secours SVP! J\'ai besoin d\'aide. : 13 Avenue du Président John F. Kennedy, 59000 Lille';
    this.mess.protegeId = 1;
    this.mess.veilleurId = 1;
    this.mess.status = 'SOS';
    this.alertCtrl.create({
      header: 'Message SOS',
      message: 'Au secours SVP! J\'ai besoin d\'aide.',
      buttons: [
        {
          text: 'Envoyer',
          handler: () => {
            //this.listeAlertes.http.post(mess);
            //console.log('Envoyer');

            const obs = this.alerteService.ajouter(this.mess, 1);
            obs.subscribe((result) => {
              this.messageService.sendData(this.QUEUE_MESSAGES_KEY, this.mess);
              console.log(this.mess);
            });
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
