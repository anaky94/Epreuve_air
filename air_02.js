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

//Convertir un tableau en une seul chaine de caractère [0]
//Espace d'un séparateur donné en dernier argument donc [1]

//Utilitises 
function transformArrayInstring (strings, separatorStrings) {
	let currentTrack = ""
	for (let i=0; i < strings.length; i++){
		currentTrack += strings[i] 
		if (i < strings.length - 1) {
			currentTrack += separatorStrings
		}  
	}

	return currentTrack
}
//Parsing 
function getArguments() {
	const args = process.argv.slice(2)
	return args 
}
//Gestion d'erreur
function isValidArguments(args) {
	if (args.length !== 4) {
		console.error("Erreur vous devez saisir au moins trois arguments")
		return false
	}
	return true
}
function rejectNumber(args) {
	for (const elements of args){
		if (!isNaN(Number(elements))){
	      console.error('Erreur')
	      return false
	    }
	}
	return true 
}
//Resolution 
function getTransformArrayInstring() {
	let args = getArguments()

	if (!isValidArguments(args) || !rejectNumber(args)){
		return 
	}



	const strings = args.slice(0, -1)
	

	const separatorStrings = args [args.length - 1]

	let result = transformArrayInstring(strings, separatorStrings)
	return result
}

//Affiche
console.log(getTransformArrayInstring())




