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
//PSEUDO CODE 
//pour bien comprendre l'epreuve me demande de créer un programme qui decoupe les chaine de caractère en tableau [] apres le tableau ou quand il ya l'espace ou une tabulation ou un retour a la ligne je split suivre l'exemple donné 
// initialiser un tableau vide c'est de créer une variable vide d 'un tableau 
//Créer une boucle en pacourant lettre par lettre 
//identifier le séparateur dans notre cas ici ("," " espace" " tabulation")



//Fonction Utilitaire 
function splitTable(args) {
	let tableResult = []
	let currentString = ""
	const separator = [" ",'\t', '\n']
	for (let i = 0; i < args.length; i++) {
		const char =  args[i]
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
	if (args.length <= 0) {
		console.error("Ce script au minimum UN arguments")
		return false
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
	let args = getArguments()

	if (!isValidArguments(args)){
		return
	}
	const testArgument = args[0]
	let result = splitTable(testArgument)
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