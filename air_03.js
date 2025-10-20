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
function searchTruder(elements) {
    let compteur = {} 
    
    for (let i = 0; i < elements.length; i++) {
        let elementsActuel = elements[i]
        if (compteur [elementsActuel]){
            compteur [elementsActuel] += 1
        }
        else {
            compteur[elementsActuel] = 1
        }
    }

    for (let element in compteur) {
        if (compteur[element] === 1) {
            return isNaN(Number(element)) ? element : Number(element)
        }
    }
    return null
}



//Parsing 
function getArguments() {
    const args = process.argv.slice(2)
    return args
}

//Gestion d'erreur 
function isValidArguments(args) {
    if (args.length < 3) {
        console.error("Erreur vous devez saisir ")
        return false 
    }
    return true
}

//Resolution 
function getSearchTruder() {
    let args = getArguments()

    if (!isValidArguments(args)){
        return
    }

    let result = searchTruder(args)
    return result
}
//Affichage 
function display() {
    let result = getSearchTruder()
    if(result === null){
        console.log("Aucun intrus trouvé")
    }else{
        console.log("l'intrus est :", result )
    }
}

display()