/* R-Challenge 1 — Le gestionnaire de playlist */

// Tu développes un lecteur de musique. Tu as un tableau de 10 chansons (chaque chanson est un objet :
//  titre, artiste, durée en secondes, genre).

// Affiche uniquement les titres de toutes les chansons
// Crée un nouveau tableau contenant uniquement les chansons de genre "Rock"
// Crée un nouveau tableau où chaque durée est convertie en format "3:45" (minutes:secondes)
// Calcule la durée totale de la playlist en minutes et secondes
// Trouve la chanson la plus longue
// Vérifie si toutes les chansons durent moins de 6 minutes
// Vérifie si au moins une chanson est du genre "Jazz"
// Trie les chansons par durée, de la plus courte à la plus longue

const playlist = [
    { titre: "Blinding Lights", artiste: "The Weeknd", duree: 200, genre: "Synthwave" },
    { titre: "Shape of You", artiste: "Ed Sheeran", duree: 233, genre: "Pop" },
    { titre: "Bohemian Rhapsody", artiste: "Queen", duree: 355, genre: "Rock" },
    { titre: "Bad Guy", artiste: "Billie Eilish", duree: 194, genre: "Electropop" },
    { titre: "Hotel California", artiste: "Eagles", duree: 390, genre: "Classic Rock" },
    { titre: "Levitating", artiste: "Dua Lipa", duree: 203, genre: "Disco" },
    { titre: "Lose Yourself", artiste: "Eminem", duree: 326, genre: "Hip Hop" },
    { titre: "Someone Like You", artiste: "Adele", duree: 285, genre: "Soul" },
    { titre: "Uptown Funk", artiste: "Mark Ronson ft. Bruno Mars", duree: 270, genre: "Funk" },
    { titre: "Imagine", artiste: "John Lennon", duree: 183, genre: "Pop Rock" }
];
playlist.forEach(element => {
    console.log(element.titre);
});

let chansons = [];

playlist.forEach(element => {
    if (element.genre == "Rock") {
        chansons.push(element);
    }
});
console.log(chansons);

let duree = [];
let minutes = [];
let secondes = 0
playlist.forEach(element => {
    minutes.push(Math.floor(element.duree / 60));
    secondes = Math.floor(element.duree % 60);
    duree.push(`${Math.floor(element.duree / 60)}:${secondes}`);

});
console.log(duree);
let secondesTots = 0;
playlist.forEach(element => {
    secondesTots += element.duree;
})
console.log(secondesTots);
minutesTots = 0;
minutes.forEach(element => {
    minutesTots += element;
})
console.log(minutesTots);
let max = 0;
let chanson = [];
playlist.forEach(element => {
    if (element.duree > max) {
        max = element.duree;
    }
    if (element.duree == max) {
        chanson = element
    }
});
console.log(chanson);
let dureeChanson = []
playlist.forEach(element => {
    if (element.duree < 360) {
        dureeChanson.push(element);
    }
})

console.log(dureeChanson);
let temp = [];
for (let i = 0; i < playlist.length; i++) {
    for (let j = 0; j < playlist.length - i - 1; j++) {
        if (playlist[j].duree > playlist[j + 1].duree) {
            temp = playlist[j];
            playlist[j] = playlist[j + 1];
            playlist[j + 1] = temp;
        }
    }
}
console.log(playlist);

let found = playlist.find(element => element.genre == "Jazz");
if (found == undefined) {
    console.log("cette genre non trouver");
} else {
    console.log(found);
}

/* R-Challenge 2 — L'analyse des ventes */
// Tu es data analyst dans un magasin.
//  Tu as un tableau de 12 objets représentant les ventes mensuelles (mois, chiffre_affaires, nb_clients, ville).
// Calcule le chiffre d'affaires total de l'année
// Calcule le chiffre d'affaires moyen par mois
// Trouve le mois avec le meilleur chiffre d'affaires
// Trouve le mois avec le moins de clients
// Crée un nouveau tableau avec uniquement les mois où le CA dépasse 50 000€
// Crée un résumé par ville : pour chaque ville, le CA total et le nombre total de clients
// Trie les mois par chiffre d'affaires décroissant
// Calcule la croissance entre chaque mois (CA mois N - CA mois N-1) et affiche-la

let ventesMensuelles = [
    { mois: "Janvier", chiffre_affaires: 12000, nb_clients: 85, ville: "Casablanca" },
    { mois: "Février", chiffre_affaires: 15000, nb_clients: 95, ville: "Rabat" },
    { mois: "Mars", chiffre_affaires: 18000, nb_clients: 110, ville: "Marrakech" },
    { mois: "Avril", chiffre_affaires: 17000, nb_clients: 105, ville: "Fès" },
    { mois: "Mai", chiffre_affaires: 60000, nb_clients: 130, ville: "Tanger" },
    { mois: "Juin", chiffre_affaires: 22000, nb_clients: 150, ville: "Agadir" },
    { mois: "Juillet", chiffre_affaires: 25000, nb_clients: 170, ville: "Oujda" },
    { mois: "Août", chiffre_affaires: 54000, nb_clients: 160, ville: "Meknès" },
    { mois: "Septembre", chiffre_affaires: 21000, nb_clients: 140, ville: "Kenitra" },
    { mois: "Octobre", chiffre_affaires: 93000, nb_clients: 155, ville: "Tétouan" },
    { mois: "Novembre", chiffre_affaires: 19000, nb_clients: 120, ville: "El Jadida" },
    { mois: "Décembre", chiffre_affaires: 26000, nb_clients: 180, ville: "Fès" }
];
let chiffre_affaires_annee = 0;
let chiffre_affaires_mois = 0;
// Calcule le chiffre d'affaires total de l'année
ventesMensuelles.forEach(element => {
    chiffre_affaires_annee += element.chiffre_affaires;
});
console.log(chiffre_affaires_annee);
// Calcule le chiffre d'affaires moyen par mois
console.log(chiffre_affaires_annee / 12);
// Trouve le mois avec le meilleur chiffre d'affaires
let meilleur_chiffre_affaires = 0;
ventesMensuelles.forEach(element => {
    if (element.chiffre_affaires > meilleur_chiffre_affaires) {
        meilleur_chiffre_affaires = element.chiffre_affaires;
    };
});
console.log(meilleur_chiffre_affaires);
// Trouve le mois avec le moins de clients
let moins_de_clients = ventesMensuelles[0];

ventesMensuelles.forEach(element => {
    if (element.nb_clients < moins_de_clients.nb_clients) {
        moins_de_clients = element;
    };
});

console.log(moins_de_clients.mois);
// Crée un nouveau tableau avec uniquement les mois où le CA dépasse 50 000€
let CA = [];
ventesMensuelles.forEach(element => {
    if (element.chiffre_affaires > 50000) {
        CA.push(element.mois);
    };
});
console.log(CA);
// Crée un résumé par ville : pour chaque ville, le CA total et le nombre total de clients
let ville = {};
for (let i = 0; i < ventesMensuelles.length; i++) {
    if (!ville[ventesMensuelles[i].ville]) {
        ville[ventesMensuelles[i].ville] = { ca: 0, nbc: 0 };
    }
    ville[ventesMensuelles[i].ville].ca += ventesMensuelles[i].chiffre_affaires;
    ville[ventesMensuelles[i].ville].nbc += ventesMensuelles[i].nb_clients;
}
console.log(ville);
// Trie les mois par chiffre d'affaires décroissant
let trie_par_moi = [];
for (let i = 0; i < ventesMensuelles.length; i++) {
    for (let j = 0; j > ventesMensuelles.length - i - 1; j++) {
        if (ventesMensuelles[j].nb_clients < ventesMensuelles[j + 1].nb_clients) {
            trie_par_moi = ventesMensuelles[j];
            ventesMensuelles[j] = ventesMensuelles[j + 1];
            ventesMensuelles[j + 1] = trie_par_moi;
        }
    }
}
console.log(ventesMensuelles);
// Calcule la croissance entre chaque mois (CA mois N - CA mois N-1) et affiche-la
let croissance = [];
for (let i = 0; i < ventesMensuelles.length - 1; i++) {
    croissance.push(ventesMensuelles[i + 1].chiffre_affaires - ventesMensuelles[i].chiffre_affaires);
}
console.log(croissance);

/* R-Challenge 3 — Le système de notation 🔥 */

// Un site web de recettes a un tableau d'avis utilisateurs (pseudo, note de 1 à 5, commentaire, date).
// Tu as 15 avis.
// Calcule la note moyenne arrondie à 1 décimale
// Compte combien d'avis par note (combien de 1 étoile, combien de 2 étoiles, etc.)
// Filtre les avis positifs (≥ 4) et les avis négatifs (≤ 2)
// Trie les avis du plus récent au plus ancien
// Trouve l'avis le plus long (en nombre de caractères dans le commentaire)
// Crée un résumé : "4.2/5 basé sur 15 avis — 8 positifs, 3 négatifs, 4 neutres"

const avisUtilisateurs = [
    { pseudo: "Alice", note: 5, commentaire: "Délicieux !", date: "2026-03-25" },
    { pseudo: "Bob", note: 4, commentaire: "Très bon, mais un peu sucré.", date: "2026-03-26" },
    { pseudo: "Charlie", note: 3, commentaire: "Correct, sans plus.", date: "2026-03-27" },
    { pseudo: "David", note: 5, commentaire: "Facile à faire !", date: "2026-03-28" },
    { pseudo: "Eva", note: 2, commentaire: "Trop sec.", date: "2026-03-29" },
    { pseudo: "Frank", note: 4, commentaire: "Rapide et bon.", date: "2026-03-30" },
    { pseudo: "Grace", note: 5, commentaire: "Le meilleur gâteau !", date: "2026-03-31" },
    { pseudo: "Heidi", note: 1, commentaire: "Gâchis d'ingrédients.", date: "2026-04-01" },
    { pseudo: "Ivan", note: 4, commentaire: "Super recette !", date: "2026-04-01" },
    { pseudo: "Judy", note: 3, commentaire: "Moyen.", date: "2026-04-01" },
    { pseudo: "Mallory", note: 5, commentaire: "Incontournable.", date: "2026-04-01" },
    { pseudo: "Nate", note: 4, commentaire: "Validé par la famille.", date: "2026-04-01" },
    { pseudo: "Olivia", note: 2, commentaire: "N'a pas levé.", date: "2026-04-01" },
    { pseudo: "Peggy", note: 5, commentaire: "Incroyable !", date: "2026-04-01" },
    { pseudo: "Sybil", note: 4, commentaire: "Très bon.", date: "2026-04-01" }
];
// Calcule la note moyenne arrondie à 1 décimale
function avis(avis) {
    let compte = { etoil1: 0, etoil2: 0, etoil3: 0, etoil4: 0, etoil5: 0 }

    let sommeNotes = 0, max = 0;
    for (let i = 0; i < avis.length; i++) {
        sommeNotes += avis[i].note;
    }
    for (let i = 0; i < avis.length; i++) {
        let note = avis[i].note;
        compte["etoil" + note]++;
    }
    let moyenne = Math.round((sommeNotes / avis.length) * 10) / 10
    function dateToNumber(dateStr) {
        let parts = dateStr.split('-');

        return Number(parts[0] + parts[1] + parts[2]);
    }

    for (let i = 0; i < avis.length; i++) {
        for (let j = 0; j < avis.length - 1; j++) {
            let d1 = dateToNumber(avis[j].date);
            let d2 = dateToNumber(avis[j + 1].date);

            if (d1 < d2) {
                let temp = avis[j];
                avis[j] = avis[j + 1];
                avis[j + 1] = temp;
            }
        }
    }

    let commentaireLong = avis[0];
    for (let i = 1; i < avis.length; i++) {
        if (avis[i].commentaire.length > commentaireLong.commentaire.length) {
            commentaireLong = avis[i];
        }
    }
    // Crée un résumé : "4.2/5 basé sur 15 avis — 8 positifs, 3 négatifs, 4 neutres"

    let positif = 0, negatif = 0, neutre = 0;

    for (let i = 0; i < avis.length; i++) {
        if (avis[i].note >= 4) {
            positif++;
        } else if (avis[i].note <= 2) {
            negatif++;
        } else {
            neutre++;
        }
    }

    return [
        moyenne,
        compte,
        avis,
        commentaireLong,
        `${moyenne}/5 basé sur ${avis.length} avis — ${positif} positifs, ${negatif} négatifs, ${neutre} neutres`
    ];

}

console.log(avis(avisUtilisateurs));
