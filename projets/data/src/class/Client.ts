class Client {
    private _nom: string;
    private _adresse: string;
    private _coordonnees: string;

    constructor(nom: string, adresse: string, coordonnees: string) {
        this._nom = nom;
        this._adresse = adresse;
        this._coordonnees = coordonnees;
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

    public getCoordonnees(): string {
        return this._coordonnees;
    }

    public setCoordonnees(coordonnees: string): void {
        this._coordonnees = coordonnees;
    }

    public consulterCompte(): void {
        // Implémentation de la méthode permettant au client de consulter son compte.
    }

    public effectuerVirement(): void {
        // Implémentation de la méthode permettant au client d'effectuer un virement.
    }

    public demanderCarteBancaire(): void {
        // Implémentation de la méthode permettant au client de demander une carte bancaire.
    }

    public modifierInformations(): void {
        // Implémentation de la méthode permettant au client de modifier ses informations.
    }
}