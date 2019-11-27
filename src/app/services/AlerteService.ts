import { GroupeDto } from '../models/GroupeDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AlerteDto } from '../models/AlerteDto';
// Equivalent de @Service de spring
// On peut le mettre ici ou dans le app module dans les providers
@Injectable({
    providedIn: 'root',
})
// C'est un Service pour ajouter un groupe dans la BDD
export class AlerteService {
    private URL = 'http://localhost:7001/api/alerte';

    // C'est comme un @Autowire dans le constructor
    // avec le mot "private dans le constructeur" Frabrique le champs , l'ajoute  au constructeur
    constructor(private http: HttpClient) {
    }

    /**
     * permet de récuperer la liste des alertes
     */
    recupererListeAlertes(): Observable<AlerteDto[]> {
        const result = this.http.get<Array<AlerteDto>>(this.URL);
        return result;
    }

    /**
     * permet de récuperer une alerte
     * @param id
     */
    recupererAlertes(id): Observable<AlerteDto> {
        const result = this.http.get<AlerteDto>(this.URL + '/' + id);
        return result;
    }


    /**
     *
     * @param groupe Group
     */
    modifier(groupe: GroupeDto) {

    }
    /**
     * Supprimer un Groupe
     * @param id number
     */
    suprimer(id: number) { }
}
