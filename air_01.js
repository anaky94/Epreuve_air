
/*  
SPLIT EN FONCTION 
Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}
Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles”
	“la”
Crevette magique dans 
 mer des étoiles

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

// //Parsing
// function getArguments() {
// 	const args = process.argv.slice(2)
// 	return args
// }
// // Gestion d'erreur
// function getArguments() {
// 	const args = process.argv.slice(2)
// 	return args
// }

//Utilities 

// premiere info c'est transformer une chaine de caractère en tableau
// EN entrer le programme doit comprendre deux arguments 
// En fonction du séparateur donc (Si le séparateur est un espace " ")
// Et en sortis le programme 

//Utilities
function splitTable(cuttingString, separatorChain) {
	let tableResult = []
	let currentTrack = ""
	const sizeSeparator = separatorChain.length

	for (let i = 0; i < cuttingString.length; i++) {
		const subChain =  cuttingString.substring(i,i+ sizeSeparator)  //retourne la partie d'une chaine comprise entre l'indice de depart et un certain nombre de caractère
		
		if (subChain === separatorChain) {
			if (currentTrack !== " ") {
				tableResult.push(currentTrack) 
			}
			currentTrack = ""
			i += sizeSeparator - 1
		} else {
			currentTrack += cuttingString[i]
		}
	}
	
	if (currentTrack !== "") {  
		tableResult.push(currentTrack)
	}	
	  return tableResult
}


//Gestion d'erreur 
function isValidArguments(args) {
	if (args.length !== 3 ){
		console.error("Erreur vous devez saisir au moins trois arguments")
		return false 
	}
	return true
}

function rejectNumber(args) {
	for (const elements of args){
		if (!isNaN(Number(elements))){
	      console.error('erreur')
	      return false
	    }
	}
	return true 
}

//Parsing 
function getArguments() {
	const args = process.argv.slice(2)
	return args 
}

//Resolution
function getSplitable() {
	let args = getArguments()

	if (!isValidArguments(args)) return 
	if (!rejectNumber(args)) return 
	
	const testArgument = args[0]
	const separateur = args[1]

	let result =  splitTable(testArgument, separateur)
	return result
}

//Affichage
function displayArray(array) {
	for (const element of array){
		console.log(element)
	}
	return array
}
	
let result = getSplitable()
console.log("Tableau complet", result)
displayArray(result)

