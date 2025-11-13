/* import re
Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.


Exemples d’utilisation :
$> ruby exo.rb 1 2 3 4 5 “+2”
3 4 5 6 7

$> ruby exo.rb 10 11 12 20 “-5”
5 6 7 15


L’opération à appliquer sera toujours le dernier élément.
Afficher error et quitter le programme en cas de problèmes d’arguments.

 */

//lobjecif est de fair une opération mathématique avec chaque entité d'une liste 
//L'operation ce trouve dans le dernier élement en chaine de caractère 

/* Pseudo code
    
 */

function displayOfStrings() {
    let tableResult = []
    let list  = [10,11,12,20]
    let numbercalculator = [+2]

    for(element of list){
        console.log(element + numbercalculator[0])
    }
    return tableResult
}



//Parsing
function getArguments() {
    const args = process.argv.slice(2)
    return args
}

//gestion d'erreur 
function isValidArguments(args) {
    if (args.length =! 2 ) {
        console.error("Erreur")
        return false
    }
    return true
}

//Resilution 
function getDisplayOfStrings (){
    let args = getArguments()

    if(!isValidArguments(args)) return
    

    const list = args[0]
    const numbercalculator= args[1]
}




















