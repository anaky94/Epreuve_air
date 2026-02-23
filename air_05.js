/*
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

const isValidNumber = (number) => {
    if (!isNaN(number)) {
        return Number(number) // True
    } else {
        return console.error("Ce script prend des nombres.") // False
    }
}

//Resolution 
function getDisplayOfStrings() {
    const args = isValidArguments(getArguments())
    
    if(!isValidArguments(args)) return
    if (!isValidNumber(args)) return

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


















