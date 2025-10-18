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
    
    for (let i = 0; i < nombres.length; i++) {
        let nombreActuel = nombres[i]


        if (compteur [nombreActuel]){
            compteur [nombreActuel] += 1
            console.log(`4. Element ${i};`, nombreActuel)
        }
        else {
            compteur[nombreActuel] = 1
            console.log(`5. initialisé ${compteur[nombreActuel]}; `,compteur )
        }
    }
    console.log(`6.compteur final;`, compteur)
    for (let nombre in compteur) {
        console.log(`7. Vérification: ${nombre}, = : ${compteur[nombre]}`)
        if (compteur[nombre] === 1) {
            console.log(" 8. Trouvé! ", nombre)
            let result = Number(nombre)
            console.log("9. Apreès conversion", result)

            return result
        }
    }
    console.log("10. Rien Trouvé")
    return null
}
console.log("===Debut===")
let resultat = searchTruder([1, 2, 3, 4, 5, 4, 3, 2, 1])
console.log("===Fin===")
console.log("resultat final: ", resultat, "type", typeof resultat )

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