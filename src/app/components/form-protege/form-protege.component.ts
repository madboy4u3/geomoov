import { Component, OnInit } from '@angular/core';
import { ProtegeDto } from 'src/app/models/ProtegeDto';

@Component({
  selector: 'app-form-protege',
  templateUrl: './form-protege.component.html',
  styleUrls: ['./form-protege.component.scss'],
})

export class FormProtegeComponent implements OnInit {
  pDto: ProtegeDto;
  constructor() {
    this.pDto = new ProtegeDto();
  }

  ngOnInit() { }
  /**
   * Ajouter un Protege
   */
  ajouter() {
    console.log(this.pDto);

  }
}
