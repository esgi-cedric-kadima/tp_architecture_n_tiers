// Import du composant Vue.js
import Vue from 'vue';
import '../data';
import '../logiciel';


// Création de l'instance de l'application Vue.js
const app = new Vue({
el: '#app',
data: {
// Données du modèle
solde: 0,
nouveauSolde: 0,
type: 'standard',
dateExpiration: '',
},
methods: {
// Méthodes du contrôleur
consulterSolde: function(): void {
// Mise à jour de la vue avec les données du modèle
this.solde = compte.getSolde();
},
effectuerVirement: function(): void {
// Appel de la méthode "effectuerVirement" du contrôleur
compteController.effectuerVirement(100);

// Mise à jour de la vue avec les données du modèle
this.nouveauSolde = compte.getSolde();
},
afficherTypeCarte: function(): void {
// Mise à jour de la vue avec les données du modèle
this.type = carte.getType();
},
afficherDateExpiration: function(): void {
// Mise à jour de la vue avec les données du modèle
this.dateExpiration = carte.getDate
});

// Instanciation des objets du modèle
const client = new Client('John Doe', '1 rue de la Paix, 75002 Paris', '01 02 03 04 05');
const compte = new Compte('123456', 1000, client);
const carte = new Carte('gold', '01/2025');
const employe = new Employe('Jane Doe', '2 rue du Louvre, 75001 Paris');
const agence = new Agence('3 avenue de la Concorde, 75008 Paris', 'du lundi au vendredi de 9h à 17h');
const banque = new Banque('Banque Populaire', '4 boulevard Haussmann, 75009 Paris');
const directeur = new Directeur('John Smith', '5 avenue des Champs-Élysées, 75010 Paris');

// Instanciation des contrôleurs
const compteController = new CompteController(compte);
const carteController = new CarteController(carte);
const employeController = new EmployeController(employe);
const agenceController = new AgenceController(agence);
const banqueController = new BanqueController(banque);
const directeurController = new DirecteurController(directeur);

// Instanciation de la vue
const vueCompte = new VueCompte();
const vueCarte = new VueCarte();
const vueEmploye = new VueEmploye();
const vueAgence = new VueAgence();
const vueBanque = new VueBanque();
const vueDirecteur = new VueDirecteur();
});

// Instanciation des objets du modèle
const client = new Client('John Doe', '1 rue de la Paix, 75002 Paris', '01 02 03 04 05');
const compte = new Compte('123456', 1000, client);
const carte = new Carte('gold', '01/2025');
const employe = new Employe('Jane Doe', '2 rue du Louvre, 75001 Paris');
const agence = new Agence('3 avenue de la Concorde, 75008 Paris', 'du lundi au vendredi de 9h à 17h');
const banque = new Banque('Banque Populaire', '4 boulevard Haussmann, 75009 Paris');
const directeur = new Directeur('John Smith', '5 avenue des Champs-Élysées, 75010 Paris');

// Instanciation des contrôleurs
const compteController = new CompteController(compte, vueCompte);
const carteController = new CarteController(carte, vueCarte);
const employeController = new EmployeController(employe, vueEmploye