

// premiere info c'est transformer une chaine de caractère en tableau
// EN ENTRe le programme doit comprendre 2 deux arguments 
// en fonction du séparateur donc (si le séparateur est un espace " ")
// et en sortis le programme 

/* join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur. */

let currentTrack = ["fire", "air", "water"] 
let strings = "" 

for (let i = 0; i < currentTrack.length; i++){
    strings += currentTrack[i] 

}


console.log(strings)

//je veux suprimer le dernier separateur de ma chaine de caractère en sortis 