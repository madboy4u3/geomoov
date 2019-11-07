import { GroupeDto } from '../models/GroupeDto';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Equivalent de @Service de spring
// On peut le mettre ici ou dans le app module dans les providers
@Injectable({
    providedIn: 'root',
})
export class GroupeService {

    private URL: string = 'http://localhost:7001/api/groupe';


    // C'est comme un @Autowire dans le constructor
    // avec le mot "private" Frabrique le champs , l'ajoute  au constructeur
    constructor(private http: HttpClient) {

    }

    ajouter(data: GroupeDto) {
        // Pas besoin de typer a utiliser le (let bippeurGroupeDto : Observable<GroupeDto>)
        let bippeurGroupeDto = this.http.post(this.URL, data);
        bippeurGroupeDto.subscribe((reponse) => {
            console.log(reponse);
        });
    }
}
