import { Carte } from '../data/src/class/Carte';

class CarteLogiciel {
    private _carte: Carte;

    constructor(carte: Carte) {
        this._carte = carte;
    }

    public afficherTypeCarte(): void {
        // Récupération du type de la carte à l'aide de la méthode "getType" de l'objet "Carte" du modèle.
        const type = this._carte.getType();

        // Affichage du type de la carte à l'aide de la vue.
        console.log(`Le type de la carte est ${type}.`);
    }
}