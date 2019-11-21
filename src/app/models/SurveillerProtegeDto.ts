export class SurveillerProtegeDto {
    // tslint:disable: variable-name
    private _tel: string;
    private _groupeId: number;


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
}
