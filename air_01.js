
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
// en fonction du séparateur donc (si le séparateur est un espace " ")
// et en sortis le programme 

//Utilities
function splitTable(string_à_decouper, string_separateur) {
	let tableResult = []
	let morceauActuel = ""
	const longeurSeparateur = string_separateur.length

	for (let i = 0; i < string_à_decouper.length; i++) {
		const sousChaine =  string_à_decouper.substring(i,i+ longeurSeparateur)  //retourne la partie d'une chaine comprise entre l'indice de depart et un certain nombre de caractère
		if (sousChaine === string_separateur) {
			if (morceauActuel !==""){
				tableResult.push(morceauActuel) 
			}
			morceauActuel = ""
			i += longeurSeparateur - 1
		} else {
			morceauActuel += string_à_decouper[i]
		}
	}

	if ( morceauActuel !== ""){
		tableResult.push(morceauActuel)
	}

	return tableResult

}	

console.log(splitTable("crevette magique dans la mer des etoiles", "la"))
//Gestion d'erreur 
function isValidArguments(args) {
	if (args.length !== 2 ){
		console.error("Erreur vous devez saisir deux arguments")
		return false 
	}
	return true
}

function chekTheValidNumber(args){
	for (const elements of args){
		if (!isNaN(Number(elements))){
			console.error('erreur')
		}
	}
}
//Parsing 




