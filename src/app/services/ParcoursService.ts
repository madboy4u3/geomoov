
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParcoursDto } from '../models/ParcoursDto';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class ParcoursService {
    private URL = 'http://localhost:8101/';

    // C'est comme un @Autowire dans le constructor
    // avec le mot "private dans le constructeur" Frabrique le champs , l'ajoute  au constructeur
    constructor(private http: HttpClient) {
    }

    /**
     * permet d'ajouter un parcours
     * @param data ParcoursDto
     */
    ajouter(data: ParcoursDto) {
        const result = this.http.post<ParcoursDto>(this.URL + '/ajouter', data);
        return result;
    }

    /**
     * permet de récuperer la liste des parcours
     */
    recupererListeParcours(): Observable<ParcoursDto[]> {
        const result = this.http.get<Array<ParcoursDto>>(this.URL);
        return result;
    }

    /**
     *
     * @param parcours ParcoursDto
     */
    modifier(parcours: ParcoursDto) { }

    /**
     * Supprimer un parcours
     * @param id number
     */
    supprimer(id: number) { }

}