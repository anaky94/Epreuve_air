/* import re
Un seul à la fois
    Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.

Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

//Utilitises 
function removeAdjacentDuplicate (storStrings) {
    if ( storStrings.length === 0 ){
        return ""
    }
    
    let resultat = storStrings[0]
    
    for (let i = 1; i < storStrings.length; i++){
        if (storStrings[i] != resultat[resultat.length-1]) {
            resultat  += storStrings[i]
        }
    }

    return resultat 
}


//Parsing 
function getArguments(){
    const args = process.argv.slice(2)
    return args
}

 
//Gestion d'ereur 
function isValidArguments(args){
    if ( args.length != 1){
        console.error("Erreur")
        return false 
    }
    return true 
}

//Resolution 
function getRemoveAdjacentDuplicate () {
    let args = getArguments()

    if (!isValidArguments(args)){
        return
    }
    let result = removeAdjacentDuplicate (args[0])
    return result
}

//Affichage 
function display() {
    let result = getRemoveAdjacentDuplicate()
    console.log(result)
}

display() 