import { Compte } from '../data/src/class/Compte';


class CompteController {
    private _compte: Compte;

    constructor(compte: Compte) {
        this._compte = compte;
    }

    public consulterSolde(): void {
        // Récupération du solde du compte à l'aide de la méthode "getSolde" de l'objet "Compte" du modèle.
        const solde = this._compte.getSolde();

        // Affichage du solde à l'aide de la vue.
        console.log(`Le solde du compte est de ${solde} €.`);
    }

    public effectuerVirement(montant: number): void {
        // Effectuation du virement sur le compte à l'aide de la méthode "effectuerVirement" de l'objet "Compte" du modèle.
        this._compte.effectuerVirement(montant);

        // Récupération du solde du compte à l'aide de la méthode "getSolde" de l'objet "Compte" du modèle.
        const solde = this._compte.getSolde();

        // Affichage du nouveau solde à l'aide de la vue.
        console.log(`Le nouveau solde du compte est de ${solde} €.`);
    }
}