export class Directeur extends Employe {
    constructor(nom: string, adresse: string) {
        super(nom, adresse);
    }

    public gererAgences(): void {
        // Implémentation de la méthode permettant au directeur de gérer les agences de la banque.
    }
}
