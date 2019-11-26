import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-compteProtege',
  templateUrl: './compteProtege.component.html',
  styleUrls: ['./compteProtege.component.scss'],
})
export class CompteProtegeComponent implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() { }


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
