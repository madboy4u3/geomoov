import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MapService {

    constructor(private nativeGeocoder: NativeGeocoder) {
    }

    options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
    };

    geocode() {
        this.nativeGeocoder.forwardGeocode('Berlin', this.options)
            .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
            .catch((error: any) => console.log(error));
    }

}
