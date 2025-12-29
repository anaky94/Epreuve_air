/*
Afficher le contenu 

Créez un programme qui affiche le contenu d’un fichier donné en argument.
Exemples d’utilisation :
$> cat a.txt
Je danse le mia
$> ruby exo.rb “a.txt”
Je danse le mia

Afficher error et quitter le programme en cas de problèmes d’arguments ou de fichier inaccessible
*/

//Utilitises
function readFile(value){
	const fs = require('fs')
	const monFichier = value

	try{
		const contenu = fs.readFileSync(monFichier,'utf8')
		console.log(contenu)
		
	}catch (erreur) {
		console.error("error") 
	}

}


//Parsing
function getArguments() {
    const args = process.argv.slice(2)
    return args 
}

//Gestion d'erreur
function isValidArguments(args) {
	if (args.length < 2){
		console.error("Erreur")
		return false
	}
	return true
}

//Resolution
function getReadFile() {
	let args = getArguments()

	if(!isValidArguments(args)) return 

	let result = readFile(args)
	return result
}

// Affiche 
function display () {
	let reesult = get
}