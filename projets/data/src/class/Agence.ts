class Agence {
    private _adresse: string;
    private _horaires: string;

    constructor(adresse: string, horaires: string) {
        this._adresse = adresse;
        this._horaires = horaires;
    }

    public getAdresse(): string {
        return this._adresse;
    }

    public setAdresse(adresse: string): void {
        this._adresse = adresse;
    }

    public getHoraires(): string {
        return this._horaires;
    }

    public setHoraires(horaires: string): void {
        this._horaires = horaires;
    }

    public gererEmployes(): void {
        // Implémentation de la méthode permettant de gérer les employés de l'agence.
    }
}