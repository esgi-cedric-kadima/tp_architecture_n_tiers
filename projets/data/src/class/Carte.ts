export class Carte {
    private _type: string;
    private _dateExpiration: string;

    constructor(type: string, dateExpiration: string) {
        this._type = type;
        this._dateExpiration = dateExpiration;
    }

    public getType(): string {
        return this._type;
    }

    public setType(type: string): void {
        this._type = type;
    }

    public getDateExpiration(): string {
        return this._dateExpiration;
    }

    public setDateExpiration(dateExpiration: string): void {
        this._dateExpiration = dateExpiration;
    }
}