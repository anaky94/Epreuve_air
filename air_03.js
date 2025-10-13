/* chercher l'intus
Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.
Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5
$> python exo.py bonjour monsieur bonjour
monsieur
Afficher error et quitter le programme en cas de problèmes d’arguments.
 */


function searchTruder(nombres) {
    
    let compteur = {} 

    for (let i = 0; i < nombres.length; i++ ) {
        let nombreActuel = nombres[i]
        
        if (compteur [nombreActuel]){
            compteur [nombreActuel] += 1
            
        }
        else {
            compteur[nombreActuel] = 1
        }
    }
    console.log(compteur)

    for( let nombre in compteur) {
        if (compteur[nombre]===1){
            return Number[nombre]
        }
    }
    return null
}

console.log(searchTruder([1, 2, 3, 4, 5, 4, 3, 2, 1]))


