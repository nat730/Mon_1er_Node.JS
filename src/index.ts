// 1 - créer un objet "personne" avec les propriétés suivantes : nom, prenom, age, sexe
// 2 - loguer l'objet
// 3 - changer le nom et le prenom par Laforge et Thomas
// 4 - loguer l'objet initial et l'objet modifié
// 5 - créer un objet "personne2" à partir de la première personne (copie)
// 6 - changer le nom et le prenom de la personne2 par Amish et Fatir
// 7 - loguer les trois objets

if (process.argv.includes("--help")) {
  console.log("Je vais vous aider");
}

const Name = process.argv.indexOf("--name");
if (Name == -1) 
 { const name = process.argv[Name+1];
  console.log(`Bonjour ${name}`);
} 

// __________________________


interface IPersonne {
  nom: string,
  prenom: string
  age: number
  sexe: "h" | "f",
}

let John : IPersonne = {
  nom: "John",
  prenom: "Martin",
  age: 30,
  sexe: "h",
};

console.log(John)

// __________________________

console.log(John)

John.nom = "Laforge"
John.prenom = "Thomas"

console.log(John)

// __________________________

let Marc = {... John}

// __________________________

console.log(John)
console.log(Marc)
Marc.nom = "Amish"
Marc.prenom = "Fatir"
console.log(Marc)



// _________________________
// ### Création d'un fichier JSON

// 1 - Installer la dépendance fs-extra
// 2 - Créer un fichier JSON avec l'objet personne
// 3 - Lire le fichier JSON et loguer le contenu

const fs = require('fs-extra'); 


  fs.writeJSONSync('Marc.json', Marc);
  fs.writeJSONSync('John.json', John);

// _________________________


// ### Les variables d'environnement

// 1 - Créer un fichier .env
// 2 - Ajouter une variable d'environnement "NAME" avec la valeur de votre nom
// 3 - Installer la dépendance dotenv
// 4 - Lire la variable d'environnement et loguer "Bonjour" et le nom fourni

require('dotenv').config();

// Récupérez la valeur de la variable d'environnement NAME
const patateNAME = process.env.jhd;

// Vérifiez si la variable NAME est définie
if (patateNAME) {
  // Loguez "Bonjour" et le nom fourni
  console.log(`Bonjour ${patateNAME} !`);
}