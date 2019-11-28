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
    private URL = 'http://192.168.1.124:7001//api/alerte';

    // C'est comme un @Autowire dans le constructor
    // avec le mot "private dans le constructeur" Frabrique le champs , l'ajoute  au constructeur
    constructor(private http: HttpClient) {
    }
    /**
     *
     * @param groupe Group
     */
    showAlertes(id): Observable<AlerteDto> {
        const result = this.http.get<AlerteDto>(this.URL + '/' + id + '/show');
        console.log(this.URL);
        return result;
    }
    /**
     * Supprimer un Groupe
     * @param id number
     */
    suprimer(id: number) { }


}
