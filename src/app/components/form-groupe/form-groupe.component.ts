import { Component, OnInit } from '@angular/core';
import { GroupeDto } from 'src/app/models/GroupeDto';

@Component({
  selector: 'app-form-groupe',
  templateUrl: './form-groupe.component.html',
  styleUrls: ['./form-groupe.component.scss'],
})
export class FormGroupeComponent implements OnInit {
  gDto: GroupeDto;
  constructor() {
    this.gDto = new GroupeDto();
  }

  ngOnInit() { }

  ajouter() {
    console.log(this.gDto);

  }

}
