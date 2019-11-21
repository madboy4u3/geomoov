import { ProtegeDto } from '../models/ProtegeDto';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveillerProtegeDto } from '../models/SurveillerProtegeDto';
// Equivalent de @Service de spring
// On peut le mettre ici ou dans le app module dans les providers
@Injectable({
    providedIn: 'root',
})
// C'est un Service pour ajouter un protege dans la BDD
export class ProtegeService {
    private URL = 'http://localhost:7001/api/protege';

    // C'est comme un @Autowire dans le constructor
    // avec le mot "private dans le constructeur" Frabrique le champs , l'ajoute  au constructeur
    constructor(private http: HttpClient) {
    }
    /**
     * permet d'ajouter un protege
     * @param data ProtegeDto
     */
    ajouter(data: SurveillerProtegeDto) {
        const result = this.http.post<SurveillerProtegeDto>(this.URL + '/ajouter', data);
        return result;
    }

    /**
     * permet de récuperer la liste des Protege
     */
    recupererListeProtege(): Observable<ProtegeDto[]> {
        const result = this.http.get<Array<ProtegeDto>>(this.URL);
        return result;
    }

    /**
     *
     * @param protege protege
     */
    modifier(protege: ProtegeDto) { }

    /**
     * Supprimer un protege
     * @param id number
     */
    suprimer(id: number) { }
}
