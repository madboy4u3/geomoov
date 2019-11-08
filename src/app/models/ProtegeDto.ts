export class ProtegeDto {
    // tslint:disable: variable-name
    private _tel: string;

    constructor() { }

    public get tel(): string {
        return this._tel;
    }
    public set tel(value: string) {
        this._tel = value;
    }
}
