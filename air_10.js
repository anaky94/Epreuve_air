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
function readFile(monFichier){
	const fs = require('fs')

	try {
		const contenu = fs.readFileSync(monFichier,'utf8')
		return contenu
	} catch (erreur) {
		console.error("error") 
		return null 
	}

}

//Parsing
function getArguments() {
    const args = process.argv.slice(2)
    return args 
}

//Gestion d'erreur
function isValidArguments(args) {
	if (args.length !== 1){
		console.error("Error")
		return false
	}
	return true
}

//Resolution
function getReadFile() {
	let args = getArguments()

	if(!isValidArguments(args)) return 

	let contenu = readFile(args[0])
	return contenu
}

// Affiche 
function display () {
	let result = getReadFile()
	if (result) {
		console.log(result)
	}
}

display();

