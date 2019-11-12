import { GroupeDto } from '../models/GroupeDto';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Equivalent de @Service de spring
// On peut le mettre ici ou dans le app module dans les providers
@Injectable({
    providedIn: 'root',
})
// C'est un Service pour ajouter un groupe dans la BDD
export class GroupeService {
    private URL = 'http://localhost:8101/api/groupe';

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
     *
     * @param groupe Group
     */
    modifier(groupe: GroupeDto) { }

    /**
     * Supprimer un Groupe
     * @param id number
     */
    suprimer(id: number) { }
}
