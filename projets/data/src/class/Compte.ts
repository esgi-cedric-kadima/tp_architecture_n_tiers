export class Compte {
    private _numero: string;
    private _solde: number;
    private _titulaire: Client;

    constructor(numero: string, solde: number, titulaire: Client) {
        this._numero = numero;
        this._solde = solde;
        this._titulaire = titulaire;
    }

    public getNumero(): string {
        return this._numero;
    }

    public setNumero(numero: string): void {
        this._numero = numero;
    }

    public getSolde(): number {
        return this._solde;
    }

    public setSolde(solde: number): void {
        this._solde = solde;
    }

    public getTitulaire(): Client {
        return this._titulaire;
    }

    public setTitulaire(titulaire: Client): void {
        this._titulaire = titulaire;
    }

    public consulterSolde(): void {
        // Implémentation de la méthode permettant de consulter le solde du compte.
    }

    public effectuerVirement(montant: number): void {
        // Implémentation de la méthode permettant d'effectuer un virement sur le compte.
    }
}