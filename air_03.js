/* chercher l'intus
Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.
Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5
$> python exo.py bonjour monsieur bonjour
monsieur
Afficher error et quitter le programme en cas de problèmes d’arguments.
 */



//Utilitises
function searchTruder(nombres) {
    console.log("1. Nombres reçus", nombres)
    
    let compteur = {} 
    console.log("2. compteur initial:", compteur)
    
    for (let i = 0; i < nombres.length; i++ ) {
        let nombreActuel = nombres[i]
        console.log(`3.Element ${i}:,`,nombreActuel)

        if (compteur [nombreActuel]){
            compteur [nombreActuel] += 1
            
        }
        else {
            compteur[nombreActuel] = 1
        }
    }
    console.log(compteur)
    for (let nombre in compteur) {
        console.log(`nombre: ${nombre}, typr: ${typeof nombre}, valeur: ${compteur[nombre]}`)
        if (compteur[nombre] === 1) {
            console.log("Trouvé! ", nombre)
            return Number[nombre]
        }
    }
    return null
}

let resultat = searchTruder([1, 2, 3, 4, 5, 4, 3, 2, 1])
console.log("resultat: ", resultat)

/* 
//Parsing 
function getArguments() {
    const args = process.argv.slice(2)
    return args
}

//Gestion d'erreur 
function isValidArguments(args) {
    if (args.length !==) {
        console.error("Erreur vous devez saisir ")
        return false 
    }

    return true
}

//Resolution 
function getsearchTruder() {
    let args = getArguments()



} */