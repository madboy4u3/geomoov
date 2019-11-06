export class GroupeDto {
    // tslint:disable: variable-name
    private _titre: string;
    private _description: string;

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


}