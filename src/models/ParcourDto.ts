export class ParcourDto {
    // tslint:disable: variable-name
    private _nom: string;
    private _description: string;
    private _addresse_depart: string;
    private _addresse_arriver: string;

    constructor() {

    }


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

    public get addresse_depart(): string {
        return this._addresse_depart;
    }
    public set addresse_depart(value: string) {
        this._addresse_depart = value;
    }

    public get addresse_arriver(): string {
        return this._addresse_arriver;
    }
    public set addresse_arriver (value: string) {
        this._addresse_arriver = value;
    }
}