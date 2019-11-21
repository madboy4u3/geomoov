
export class VeilleurDto {
    // tslint:disable: variable-name
    private _prenom: string;
    private _nom: string;
    private _dateNaissance: string;
    private _telephone: string;
    private _mail: string;
    private _adresse: string;
    private _codePostale: string;
    private _ville: string;
    private _pays: string;
    private _password: string;

    constructor() { }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }


    public get dateNaissance(): string {
        return this._dateNaissance;
    }
    public set dateNaissance(value: string) {
        this._dateNaissance = value;
    }

    public get telephone(): string {
        return this._telephone;
    }
    public set telephone(value: string) {
        this._telephone = value;
    }


    public get mail(): string {
        return this._mail;
    }
    public set mail(value: string) {
        this._mail = value;
    }

    public get adresse(): string {
        return this._adresse;
    }
    public set adresse(value: string) {
        this._adresse = value;
    }


    public get codePostale(): string {
        return this._codePostale;
    }
    public set codePostale(value: string) {
        this._codePostale = value;
    }


    public get ville(): string {
        return this._ville;
    }
    public set ville(value: string) {
        this._ville = value;
    }


    public get pays(): string {
        return this._pays;
    }
    public set pays(value: string) {
        this._pays = value;
    }
}
