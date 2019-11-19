// Transferer l'objet groupe entre Front & Back
export class GroupeDto {
    // tslint:disable: variable-name
    private _titre: string;
    private _description: string;
    private _veilleurId: number = 1;


    constructor() { }


    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }
    public get veilleurId(): number {
        return this._veilleurId;
    }
    public set veilleurId(value: number) {
        this._veilleurId = value;
    }
}
