/* S-Challenge 1 — La liste des participants */

// Tu gères les inscriptions à un événement.
//  Crée un tableau contenant 6 noms de participants. Affiche la liste complète,
//  le premier inscrit, le dernier inscrit et le nombre total de participants. Ensuite,
//  ajoute 2 nouveaux participants à la fin de la liste, retire le dernier de la liste et affiche l'élément retiré,
//  puis retire le premier de la liste. Affiche l'état final.
let array = ['nome1', 'nome2', 'nome3', 'nome4', 'nome5', 'nome6'];
console.log(array);
console.log('------------------------');
console.log(array[0].concat(','), array[array.length - 1].concat(','), array.length);
array.push('nome7', 'nome8');
console.log('------------------------');
console.log(array);
// array.pop(array.length-1);
console.log('------------------------')
console.log(array.pop());
console.log('------------------------');
array.shift();
console.log(array);
console.log('------------------------');


/* S-Challenge 2 — Le relevé de notes */

// Un professeur te donne les notes de 7 élèves dans un tableau : [12, 8, 15, 6, 18, 9, 14].
//  Parcours ce tableau et calcule : la somme de toutes les notes, la moyenne de la classe,
//  la note la plus haute, la note la plus basse, le nombre d'élèves qui ont la moyenne (≥ 10).
//  Affiche un bulletin de résultats formaté.

let notes = [12, 8, 15, 6, 18, 9, 14];
let somme = 0;
for (const element of notes) {
    somme += element;
}
let moyennes = somme / notes.length;
console.log('la somme de toutes les notes: '.concat(somme));
console.log('------------------------');
console.log('la moyenne de la classe: '.concat(moyennes.toFixed(2)));
console.log('------------------------');
let max = notes[0];
for (let i = 0; i < notes.length; i++) {
    if (notes[i] > max) {
        max = notes[i];
    }
}
console.log(max)
let count = 0;
for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        count++
    }
}
console.log(count);

/* S-Challenge 3 — La fiche d'identité */

// Crée un objet représentant une personne avec ses informations : nom, prénom, âge,ville et email.
//  Affiche une phrase de présentation complète. Modifie la ville de la personne (elle a déménagé).
//  Ajoute un numéro de téléphone à sa fiche.
//  Affiche la liste de toutes les informations disponibles sur cette personne (les clés) et leurs valeurs.

let personne = {
    nom: "El-Hassouni",
    prenom: "Aymane",
    age: "21",
    ville: "Youssoufia",
    email: "aymane.elhassouni3@gmail.com"
}

console.log("Bonjour, je m'appelle "
    .concat(personne.nom, " ", personne.prenom), ", j'ai "
        .concat(personne.age), "ans et j'habite à "
            .concat(personne.ville), " . Vous pouvez me joindre par e-mail à "
                .concat(personne.email), "."
);
personne.ville = "Taounate";
personne.telephone = "0649516434";
console.log(personne);
console.log('------------------------');
/* S-Challenge 4 — Le ticket de caisse */

// Tu travailles à la caisse d'un magasin.
//  Crée un tableau de 5 articles achetés,
//  chaque article est un objet avec un nom, une quantité et un prix unitaire.
//  Affiche chaque ligne du ticket sous la forme "Lait x2 = 3.00€".
//  Calcule et affiche le sous-total, la TVA (20%) et le total TTC.

let articles = [
    { nom: "Pomme", quantite: 7, prix: 6.00 },
    { nom: "Pain", quantite: 3, prix: 2.50 },
    { nom: "Lait", quantite: 5, prix: 4.00 },
    { nom: "Fromage", quantite: 2, prix: 13.21 },
    { nom: "Café", quantite: 4, prix: 17.00 }
];

for (let i = 0; i < articles.length; i++) {
    const totale = (articles[i].quantite * articles[i].prix);
    let TVA = (totale * 0.2).toFixed(2);
    let TTC = (TVA + totale);
    console.log(`${articles[i].nom} x${articles[i].quantite} = ${totale}$`);
    console.log(`TVA: ${TVA},TTC: ${TTC}`);
}

console.log('------------------------');
/* S-Challenge 5 — Le trombinoscope */

// Crée un tableau de 6 objets représentant des étudiants (nom, prénom, âge, moyenne).
//  Parcours le tableau et affiche les étudiants qui ont une moyenne supérieure ou égale à 12.
//  Ensuite, affiche les étudiants triés du plus jeune au plus âgé. Enfin,
//  cherche un étudiant par son nom : s'il existe affiche ses informations,
//  sinon affiche "Étudiant non trouvé".

let students = [
    { nom: "Dupont", prenom: "Jean", age: 20, moyenne: 14.5 },
    { nom: "Martin", prenom: "Claire", age: 22, moyenne: 16.0 },
    { nom: "Durand", prenom: "Pierre", age: 21, moyenne: 11.5 },
    { nom: "Petit", prenom: "Sophie", age: 19, moyenne: 18.2 },
    { nom: "Rousseau", prenom: "Lucas", age: 23, moyenne: 9.5 },
    { nom: "Garcia", prenom: "Emma", age: 24, moyenne: 15.0 }
];
students.forEach(element => {
    if (element.moyenne >= 12) {
        console.log(element)
    }
});
let studentsSort = [];
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length - i - 1; j++) {
        if (students[j].age > students[j + 1].age) {
            studentsSort = students[j];
            students[j] = students[j + 1];
            students[j + 1] = studentsSort;
        }
    }
}
console.log(students);

/* students.sort((a, b) => a.age - b.age);
console.log(students); */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter nom d\'étudiant doi cherché? ', (name) => {
    let found = students.find(element => element.nom == name);
    if(found == undefined){
        console.log("Étudiant non trouvé");
    }else{
        console.log(found);
    }
    rl.close();
});


