/* SPLIT 
Créez un programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

Votre programme devra utiliser une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}
Exemples d’utilisation :
$> python exo.py “Bonjour les gars”
Bonjour
les
gars

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//Fonction Utilitaire 
function splitTable(args) {
	let tableResult = []
	let currentString = ""
	const separator = [" ",'\t', '\n']
	for (let i = 0; i < args.length; i++) {
		const char =  args[i] // on initialise la chaine de caractère
		if (separator.includes(char)) { 
			if (currentString !== "") {
				tableResult.push(currentString)
				currentString = ""
			}
		} else {
			currentString += char 
		}
	}

	if ( currentString !== "") {
	    tableResult.push(currentString)

	}
	return tableResult
    
}

//Gestion d'erreur 
function isValidArguments(args) {
	if (args.length > 1) {
		return arguments
	} else {
		return console.log("Ce script prend au moins 2 arguments en parametres.")
	}
}

function isValidNumber(args) {
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

//Résolution
function getSplitable() {
	let args = isValidArguments(getArguments())

	if (!isValidArguments(args)) return //arret si arguments invalide
	if (!isValidNumber(args)) return //arret si nombre detecté

	const testArgument = args[0]
	const separateur = args[1]
	let result = splitTable(testArgument,separateur)
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
displayArray(result)