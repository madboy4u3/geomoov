import { Component, OnInit } from '@angular/core';
import { GroupeDto } from 'src/app/models/GroupeDto';
import { GroupeService } from 'src/app/services/GroupeService';

@Component({
  selector: 'app-form-groupe',
  templateUrl: './form-groupe.component.html',
  styleUrls: ['./form-groupe.component.scss'],
})
export class FormGroupeComponent implements OnInit {
  gDto: GroupeDto;
  constructor(private groupeService: GroupeService) {
    this.gDto = new GroupeDto();
  }

  ngOnInit() { }

  ajouter() {
    this.groupeService.ajouter(this.gDto);

  }

}
