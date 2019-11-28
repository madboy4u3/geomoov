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

    filterMessage(searchTerm, items) {
        return items.filter(item => item._message.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    filterNom(searchTerm, items) {
        return items.filter(item => item._nom.toLowerCase().includes(searchTerm.toLowerCase()));
    }
}
