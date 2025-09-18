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
function split(array) {
	array = []
	let currentString = ""
	const separator = [" " ,"\t", "\n",]
	
	for (let i = 0; i < cutingStrings.length; i++) {
		const char = currentString[i]

		if (separator.includes(char)) {
			if (currentString !== "") {
				tableResult.push(currentString)
				currentString = ""
			}
		} else {
			currentString += char
		}
	}

	if (currentString !== "") {
		tableResult.push(currentString)
	}

	return tableResult
}



//Gestion d'erreur 
function isValidArguments(args) {
	if (args.length === 0) {
		console.error("Ce script nécéssite minimum deux arguments")
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
function displaySplitTable() {
	//boucle qui di console log l'element 
	const inputString = getArguments()
	
	if (!isValidArguments(process.argv.slice(2))) {
		return
	}
	
	
	const resultSplit = splitTable(inputString)
	console.log(resultSplit)
}

//Affichage 
displaySplitTable()
 


