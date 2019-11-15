import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParcoursDto } from '../models/ParcoursDto';
// Equivalent de @Service de spring
// On peut le mettre ici ou dans le app module dans les providers
@Injectable({
    providedIn: 'root',
})
export class ParcoursService {
    private URL = 'http://localhost:7001/api/parcours';

    // C'est comme un @Autowire dans le constructor
    // avec le mot "private dans le constructeur" Frabrique le champs , l'ajoute  au constructeur
    constructor(private http: HttpClient) {
    }

    /**
     * permet d'ajouter un parcours
     * @param data ParcoursDto
     */
    ajouter(data: ParcoursDto) {
        console.log(JSON.stringify(data));
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
