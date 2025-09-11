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



// Fonction Utilitaire 
function splitTable(cutingStrings) {
	tableResult = []
	let currentSegment = ""
	const separator = [" ",'\t', '\n', ]
	
	for(let i = 0; i < cutingStrings.length; i++){
		const caractere = cutingStrings[i]

		if (separator.includes(cutingStrings[i])) {
			if (currentSegment !== ""){
				tableResult.push(currentSegment)
				currentSegment = ""
			}
		} else {
			currentSegment += caractere 
		}
	}

	if (currentSegment !== ""){
		tableResult.push(currentSegment)
	}

	return tableResult
}


console.log(splitTable("bonjour les gars"))

// console.log(splitTable("bonjour" , "les", "gars"))

// Gestion d'erreur 


//Parsing
/* function getArgum$ents() {
	const arguments = process.argv.slice(2)
	return arguments
}
 */
//Résolution

//Affichage 


