export class MapApiDto {
    // tslint:disable: variable-name
    features: MapAdreseDto[];
}

export class MapAdreseDto extends MapApiDto {

    properties: PropertiesDto;
    geometry: CordinateDto;

}

export class CordinateDto extends MapAdreseDto {
    coordinates: string[];

}

export class PropertiesDto extends MapAdreseDto {
    label: string;

}
