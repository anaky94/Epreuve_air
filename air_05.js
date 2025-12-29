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


//Utilitises 
function displayOfStrings() {
    let tableResult = []
    let list = []
    let numbercalculator = ""

    for(element of list){
        let calcul = element + numbercalculator[0]
        tableResult.push(calcul)
    }
    return tableResult
}



//Parsing
function getArguments() {
    const args = process.argv.slice(2)
    return args
}

//Gestion d'erreur 
function isValidArguments(args) {
    if (args.length < 3 ) {
        console.error("Erreur")
        return false
    }
    //verifie que le dernier argument est + ou -
    const lastArg = args [args.length -1]
    
    if (lastArg !== "+" && lastArg !== "-") {
        console.log("Erreur")
        return false
    }

    return true 

}

function checkTheValidNumber(args) {
    for(let i=0; i < args.length - 1; i++ ){
        const arg = args[i]
        if (arg.trim() === "" || (isNaN(Number(arg)))){
            console.error(`Erreur : ce n'est pas un nombre valide`);
            console.info("Exemple : node script.js 4 6 12 ");
            return true
        }
    }
    return false
} 

//Resolution 
function getDisplayOfStrings() {
    let args = getArguments()
    
    if(!isValidArguments(args)) return
    if (checkTheValidNumber(args)) return

    const operation = args [args.length - 1]

    const numberWithSign = args[args.length - 2]

    const number = Number(numberWithSign)

    const list = args.slice(0, -1).map(Number)

    let tableResult = []
    
    for (element of list){
        if (operation === "+"){
            tableResult.push (element +number)
        } else if  (operation === "-") {
            tableResult.push(element-number)
            }
    }
    
    return tableResult
}
//Affichage
function display() {
    let result = getDisplayOfStrings()
    console.log(result)
    
}

display()


















