/* import re
"""
Un seul à la fois
    Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.

Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?
Afficher error et quitter le programme en cas de problèmes d’arguments.
"""
 */

//Utilitises 
//le programme doit affiché une chaine de caractères en évitant les caractères identique
// je doit faire une fonction qui affiche 

/* 
FONCTION suprimerDoublonAdjacent(text):
    si text est vide Alors retourner" "
    
    CREER resultat = premier caractère du texte

    pour i de 1 à longeur(texte)-1:
        si caractère[i] est different de caractère[i-1]:
            Ajouter caractère[i] à resultat 
    retiourner resultat  
    */

function stringsCarac (storStrings) {
    if ( storStrings.length === 0 ){
        return ""
    }
    let resultat = storStrings[0]
    
    for (let i = 1; i < storStrings.length; i++){
        if (storStrings[i] != resultat[resultat.length-1] ){
            resultat  += storStrings[i]
        }
    }

    return resultat 
}

console.log(stringsCarac("bjjnour, bien ou quoi ?"))

//Parsing 
function getArguments(){
    const args = process.argv.slice(2)
    return args
}

// Gestion d'ereur 
function isValisArguments(args){
    if ( args.length != 1){
        console.error("Erreur")
        return false 
    }

    return true 

}