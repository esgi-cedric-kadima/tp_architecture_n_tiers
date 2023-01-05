import { Directeur } from '../data/src/class/Directeur';

class DirecteurLogiciel {
    private _directeur: Directeur;

    constructor(directeur: Directeur) {
        this._directeur = directeur;
    }

    public gererAgences(): void {
        // Gestion des agences de la banque à l'aide de la méthode "gererAgences" de l'objet "Directeur" du modèle.
        this._directeur.gererAgences();
    }
}
