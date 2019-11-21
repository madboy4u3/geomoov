export class ProtegeDto {
    // tslint:disable: variable-name
    private _id: number;
    private _tel: string;
    private _groupeId: number;
    private _nom: string;
    private _prenom: string;

    constructor() { }

    public get tel(): string {
        return this._tel;
    }
    public set tel(value: string) {
        this._tel = value;
    }
    public get groupeId(): number {
        return this._groupeId;
    }
    public set groupeId(value: number) {
        this._groupeId = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}
