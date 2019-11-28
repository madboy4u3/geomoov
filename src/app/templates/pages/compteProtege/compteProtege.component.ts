import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlerteDto } from 'src/app/models/AlerteDto';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/helpers/MessageService';

@Component({
  selector: 'app-compteProtege',
  templateUrl: './compteProtege.component.html',
  styleUrls: ['./compteProtege.component.scss'],
})
export class CompteProtegeComponent implements OnInit {
  listeAlertes: AlerteDto[];
  msg: 'Au secours  SVP! J\'ai besoin d\'aide.';
  pickupLocation: string;

  constructor(private alertCtrl: AlertController,
    private router: Router, private route: ActivatedRoute,
    private messageService: MessageService, ) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pickupLocation = this.router.getCurrentNavigation().extras.state.pickupLocation;
      }
    });
  }

  ngOnInit() { }
  onpickupClick() {
    this.router.navigate(['pickup-location']);
  }

  showConfirm(msg) {
    this.alertCtrl.create({
      header: 'Message SOS',
      message: 'Au secours  SVP! J\'ai besoin d\'aide.',
      buttons: [
        {
          text: 'Envoyer',
          handler: () => {
            this.listeAlertes.push(msg);
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
