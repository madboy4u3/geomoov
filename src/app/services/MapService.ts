import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MapApiDto } from '../models/MapApiDto';
import { Observable } from 'rxjs';
import { FeatureCollection } from 'geojson';
declare var google;

@Injectable({
    providedIn: 'root',
})
export class MapService {
    URL: string = 'https://api-adresse.data.gouv.fr/search/?q=';
    autoComplete: string = '?autocomplete=1';

    constructor(private http: HttpClient) { }

    /* getRequest() {
         const headers = new HttpHeaders()
             .set('cache-control', 'no-cache')
             .set('content-type', 'application/json')
         const body = {
             token: 'my token'
         }
 
         return this.http
             .get(this.url)
             .subscribe(res => console.log(res));
     } */

    getApiMap(add: string): Observable<MapApiDto> {

        const result = this.http.get<MapApiDto>(this.URL + add + this.autoComplete);
        console.log(this.URL + 'add' + this.autoComplete);
        console.log(result);
        return result;
    }

}
