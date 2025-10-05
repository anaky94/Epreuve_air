/* CONTACT  
Créez un programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.
Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, separateur) {
	# votre algorithme
	return (string)
}
Exemples d’utilisation :
$> python exo.py “je” “teste” “des” “trucs” “ “
Je teste des trucs
Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

// convertir un tableau en une seul chaine de caractère [0]
// espacé d'un séparateur donné en dernier argument donc [1]

//Utilitises 
/* function transformArrayInstring (strings, separatorStrings) {
	let string = []
	let currentTrack = ""
	for (string in strings){
		currentTrack += string + separatorStrings.pop()
		return currentTrack
	}
	
}

console.log(transformArrayInstring("je" ,"teste", "des" ,"rucs", ""))
 */

function transformArrayInstring (strings, 	separatorStrings){
	
	let currentTrack = ""
	for( let i = 0; i < strings.length; i++){
		currentTrack += strings + separatorStrings

	}

	return currentTrack

}

console.log(transformArrayInstring(['fire', 'air', 'water'], ""))
