
/*  
SPLIT EN FONCTION 
Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
	# votre algorithme
	return (tableau)
}
Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles”// si le mot de l'argument 1 est similaire au mot de l'argument 2 alors ne pas les afficher
//  “la”
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
// en fonction du séparateur donc (si le séparateur est un espace " ")
// et en sortis le programme 


function splitTable(args) {
	let tableResult = []
	let currentString = ""
	let motReference = args[3]
	for (let i = 0; i < args.length; i++) {
		const char =  args[i]
		///faire la comparaison ici 
		if (currentString === args[3]) {
				//comparé currentString avec motReference
				if (currentString === motReference){
					split.currentString
					currentString = ""
				}
				//si vrai, ajouter à tableResult
			}
				else {
			currentString += char
		}
	}
	if(currentString === motReference){{
		tableResult.split(currentString.args[3])
	}

	}
	return tableResult

}	

console.log(splitTable("bonjour je suis"))
