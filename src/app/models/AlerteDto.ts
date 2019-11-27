// Transferer l'objet alerte entre Front & Back
export class AlerteDto {
    // tslint:disable: variable-name
    private _message: string;
    private _status: string;
    private _protegeId: number;
    private _veilleurId: number;

    constructor() { }

    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }

    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }

    public get protegeId(): number {
        return this._protegeId;
    }
    public set protegeId(value: number) {
        this._protegeId = value;
    }

    public get veilleurId(): number {
        return this._veilleurId;
    }
    public set veilleurId(value: number) {
        this._veilleurId = value;
    }
}