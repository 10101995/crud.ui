import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Projets } from '../model/projets.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  //Déclaration de l'URL API
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  // method pour un get de tous les projet
  getAllProjets(): Observable<Projets[]> {
    return this.http.get<Projets[]>(this.baseApiUrl + 'api/Projets')
  }

}
