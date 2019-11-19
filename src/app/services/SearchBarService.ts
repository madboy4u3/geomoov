import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
/**
 * Service pour la barre de recherche
 */
export class SearchBarService {


    filterItems(searchTerm, items) {
        return items.filter(item => item._titre.toLowerCase().includes(searchTerm.toLowerCase()));
    }
}
