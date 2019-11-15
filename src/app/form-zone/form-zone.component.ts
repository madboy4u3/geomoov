import { Component, OnInit } from '@angular/core';
import { ZoneDto } from '../models/ZoneDto';
import { Zoneservice } from '../services/ZoneService';
import { MessageService } from '../helpers/MessageService';

@Component({
  selector: 'app-form-zone',
  templateUrl: './form-zone.component.html',
  styleUrls: ['./form-zone.component.scss'],
})
export class FormZoneComponent implements OnInit {
  QUEUE_MESSAGES_KEY = 'formZone';
  zoneDto: ZoneDto;

  constructor(private zoneService: Zoneservice, private messageService: MessageService) {
    this.zoneDto = new ZoneDto();
  }

  ngOnInit() {}

    /**
    * Ajouter une zone
    */
  ajouter() {
    const obs = this.zoneService.ajouter(this.zoneDto);
    obs.subscribe((result) => {
      this.messageService.sendData(this.QUEUE_MESSAGES_KEY, this.zoneDto);
      console.log(result);
    });
  }
    /**
   * Modifier une zone
   * @param zone ZoneDto
   */
  modifier(zoneDto: ZoneDto) { }
  /**
   * Supprimer une zone
   * @param id number
   */
  suprimer(id: number) { }

}
