import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VeilleurDto } from '../models/VeilleurDto';


@Injectable({
    providedIn: 'root',
})
export class VeilleurService{
    private URL = 'http://localhost:7001/api/veilleur';

    // C'est comme un @Autowire dans le constructor
    // avec le mot "private dans le constructeur" Frabrique le champs , l'ajoute  au constructeur
    constructor(private http: HttpClient) {
    }

    /**
     * permet d'ajouter un veilleur
     * @param data VeilleurDto
     */
    ajouter(data: VeilleurDto) {
        console.log(JSON.stringify(data));
        const result = this.http.post<VeilleurDto>(this.URL + '/ajouter', data);
        return result;
    }

    /**
     * permet de récuperer la liste des veilleurs
     */
    recupererListeVeilleur(): Observable<VeilleurDto[]> {
        const result = this.http.get<Array<VeilleurDto>>(this.URL);
        return result;
    }

    /**
     *
     * @param veilleur VeilleurDto
     */
    modifier(veilleur: VeilleurDto) { }

    /**
     * Supprimer un veilleur
     * @param id number
     */
    supprimer(id: number) { }
}