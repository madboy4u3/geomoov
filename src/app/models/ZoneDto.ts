import { ParcoursDto } from './ParcoursDto';

// Transferer l'objet zone entre Front & Back
export class ZoneDto{
     // tslint:disable: variable-name
    private _description: string;
    private _parcours: ParcoursDto;

    constructor() {}

    public get parcours(): ParcoursDto {
        return this._parcours;
    }
    public set parcours(value: ParcoursDto) {
        this._parcours = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }


}