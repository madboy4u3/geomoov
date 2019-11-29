import { GroupeDto } from '../models/GroupeDto';
import { ParcoursDto } from '../models/ParcoursDto';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProtegeDto } from '../models/ProtegeDto';
// Equivalent de @Service de spring
// On peut le mettre ici ou dans le app module dans les providers
@Injectable({
    providedIn: 'root',
})
// C'est un Service pour ajouter un groupe dans la BDD
export class GroupeService {
    private URL = 'http://192.168.1.124:7001//api/groupe';

    // C'est comme un @Autowire dans le constructor
    // avec le mot "private dans le constructeur" Frabrique le champs , l'ajoute  au constructeur
    constructor(private http: HttpClient) {
    }

    /**
     * permet d'ajouter un groupe
     * @param data GroupeDto
     */
    ajouter(data: GroupeDto) {
        const result = this.http.post<GroupeDto>(this.URL + '/ajouter', data);
        return result;
    }

    /**
     * permet de récuperer la liste des groupes
     */
    recupererListeGroupes(): Observable<GroupeDto[]> {
        const result = this.http.get<Array<GroupeDto>>(this.URL);
        return result;
    }

    /**
     * permet de récuperer un groupe
     * @param id
     */
    recupererGroupes(id): Observable<GroupeDto> {
        const result = this.http.get<GroupeDto>(this.URL + '/' + id);
        return result;
    }
    /**
     * permet de récuperer la liste des parcours
     */
    recupererListeParcours(id: number): Observable<ParcoursDto[]> {
        const result = this.http.get<Array<ParcoursDto>>(this.URL + '/' + id + '/parcours');
        return result;
    }

    /**
     * permet de récuperer la liste des protegés
     */
    recupererListeProteges(id: number): Observable<ProtegeDto[]> {
        const result = this.http.get<Array<ProtegeDto>>(this.URL + '/' + id + '/proteges');
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

    /*   deleteGroupe(id: number): Observable<boolean> {
           const result = this.http.delete<boolean>(this.URL + '/' + id + '/delete');
           return result
       } */
}
