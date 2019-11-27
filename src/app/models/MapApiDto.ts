export class MapApiDto {

    // tslint:disable: variable-name
    private label: string;
    private x: string;
    private y: string;

    public get _label(): string {
        return this.label;
    }
    public set _label(value: string) {
        this.label = value;
    }

    public get _x(): string {
        return this.x;
    }
    public set _x(value: string) {
        this.x = value;
    }

    public get _y(): string {
        return this.y;
    }
    public set _y(value: string) {
        this.y = value;
    }
}