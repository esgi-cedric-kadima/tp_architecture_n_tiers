class Employe {
    private _nom: string;
    private _adresse: string;

    constructor(nom: string, adresse: string) {
        this._nom = nom;
        this._adresse = adresse;
    }

    public getNom(): string {
        return this._nom;
    }

    public setNom(nom: string): void {
        this._nom = nom;
    }

    public getAdresse(): string {
        return this._adresse;
    }

    public setAdresse(adresse: string): void {
        this._adresse = adresse;
    }
}