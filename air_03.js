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
    console.log("1. Nombres reçus", elements)
    
    let compteur = {} 
    
    for (let i = 0; i < elements.length; i++) {
        let elementsActuel = elements[i]


        if (compteur [elementsActuel]){
            compteur [elementsActuel] += 1
            console.log(`4. ${elementsActuel} incrementé ->;`, compteur[elementsActuel])
        }
        else {
            compteur[elementsActuel] = 1
            console.log(`5. ${elementsActuel} initialisé ->; `,compteur[elementsActuel] )
        }
    }
    console.log(`6.compteur final;`, compteur)

    for (let element in compteur) {
        if (compteur[element] === 1) {
            console.log(" 7. Trouvé! ", )
            return isNaN(Number(element)) ? element : Number(element)
        }
    }
    console.log("8. Rien Trouvé")
    return null
}

console.log("test 1:", searchTruder(["bonjou", "monsieur", "bonjou"]))
console.log("test 2:", searchTruder(["a","a","é","c","c"]))
console.log("test 3:", searchTruder(["helow","helow","helow","helow"]))


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
function getsearchTruder() {
    let args = getArguments()

}