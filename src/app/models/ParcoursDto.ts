export class ParcoursDto {
    // tslint:disable: variable-name
    private _nom: string;
    private _description: string;
    private _adresseDepart: string;
    private _adresseArrivee: string;

    constructor() { }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get adresseDepart(): string {
        return this._adresseDepart;
    }
    public set adresseDepart(value: string) {
        this._adresseDepart = value;
    }

    public get adresseArrivee(): string {
        return this._adresseArrivee;
    }
    public set adresseArrivee(value: string) {
        this._adresseArrivee = value;
    }
}
