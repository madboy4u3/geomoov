import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZoneDto } from '../models/ZoneDto';
import { Observable } from 'rxjs';

// Equivalent de @Service de spring
// On peut le mettre ici ou dans le app module dans les providers
@Injectable({
    providedIn: 'root',
})
// C'est un Service pour ajouter une zone dans la BDD
export class Zoneservice {
    private URL = 'http://localhost:7001/api/zones';

    // C'est comme un @Autowire dans le constructor
    // avec le mot "private dans le constructeur" Frabrique le champs , l'ajoute  au constructeur
    constructor(private http: HttpClient) {
    }

    /**
     * permet d'ajouter une zone
     * @param data ZoneDto
     */
    ajouter(data: ZoneDto) {
        const result = this.http.post<ZoneDto>(this.URL + '/ajouter', data);
        return result;
    }

    /**
     * permet de récuperer la liste des zones
     */
    recupererListeGroupes(): Observable<ZoneDto[]> {
        const result = this.http.get<Array<ZoneDto>>(this.URL);
        return result;
    }

    /**
     *
     * @param zone Zone
     */
    modifier(zone: ZoneDto) { }

    /**
     * Supprimer une zone
     * @param id number
     */
    suprimer(id: number) { }
}