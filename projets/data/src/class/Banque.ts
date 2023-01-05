class Banque {
    private _nom: string;
    private _siegeSocial: string;

    constructor(nom: string, siegeSocial: string) {
        this._nom = nom;
        this._siegeSocial = siegeSocial;
    }

    public getNom(): string {
        return this._nom;
    }

    public setNom(nom: string): void {
        this._nom = nom;
    }

    public getSiegeSocial(): string {
        return this._siegeSocial;
    }

    public setSiegeSocial(siegeSocial: string): void {
        this._siegeSocial = siegeSocial;
    }

    public gererComptesClients(): void {
        // Implémentation de la méthode permettant de gérer les comptes des clients de la banque.
    }
}