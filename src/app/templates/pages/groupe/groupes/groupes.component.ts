import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroupeDto } from 'src/app/models/GroupeDto';
import { GroupeService } from 'src/app/services/GroupeService';

@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.scss'],
})
export class GroupesComponent implements OnInit, OnDestroy {
  private listeGroupes: Array<GroupeDto>;
  private obs :any
  private subscription:any
  constructor(private groupeService: GroupeService) { }
 

  ngOnInit() {
    this.obs = this.groupeService.recupererListeGroupes();
    this.subscription = this.obs.subscribe(resp => this.listeGroupes= resp);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
