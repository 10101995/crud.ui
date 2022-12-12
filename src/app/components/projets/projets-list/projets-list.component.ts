import { Component, OnInit } from '@angular/core';
import { Projets } from 'app/model/projets.model';
import { ProjetsService } from '../../../services/projets.service';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.css']
})
export class ProjetsListComponent implements OnInit {

  projets: Projets[] = [];
  constructor(private ProjetsService: ProjetsService) { }

  // Au lancement de l'application
  ngOnInit(): void {
    this.ProjetsService.getAllProjets().subscribe(
      {
        next: (projets) => {
          this.projets = projets;
        },
        error: (response) => {
          console.log(response);
        }
      }
    );
  }

}
