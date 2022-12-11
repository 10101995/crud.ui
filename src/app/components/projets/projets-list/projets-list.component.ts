import { Component, OnInit } from '@angular/core';
import { Projets } from 'app/model/projets.model';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.css']
})
export class ProjetsListComponent implements OnInit {

  projets: Projets[] = [
    {
      id: '1',
      name: 'LikamboApp',
      description: 'Projet Likambo',
      link: 'likamboapp.com',
      customer: 'JKP-DEV',
      images: 'https://img.freepik.com/photos-premium/conception-mot-ecrit-au-dessus-formes-3d-geometriques-colorees_2227-1663.jpg?w=2000'
    },
    {
      id: '2',
      name: 'Razgo',
      description: 'Projet Razgo',
      link: 'https://9mhpgk.axshare.com/start.html?path=start.html#p=home&sc=1&id=2qdpxh&c=1',
      customer: 'Dr. Yao',
      images: 'https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/05/Some-of-the-Best-Automotive-Design-Features-of-2019-gear-patrol-lead-full.jpg'
    },
    {
      id: '3',
      name: 'Adobe',
      description: 'Projet Adobe',
      link: 'adobe.fr',
      customer: 'Adobe',
      images: 'https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/mx/adobe-creative-cloud-subscription/adobe-partnership-twitter-image.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.projets.push();
  }

}
