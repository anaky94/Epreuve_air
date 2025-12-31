
/* 
Afficher une pyramide 
 Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.
Exemples d’utilisation :
$> ruby exo.rb O 5
    O
   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO

Afficher error et quitter le programme en cas de problèmes d’arguments

*/

//Utilitises 

function displayPyramid(caractere, numberFloor) {
    for( let i = 1; i <= numberFloor; i++ )
    {
        const  nombreEspaces   = numberFloor - i
        const nombreCaracteres = (i * 2) - 1  
        
        let ligne = ""

        for (let j = 0; j < nombreEspaces; j++){
            ligne += " "
        }

        for (let j = 0; j < nombreCaracteres; j++){
            ligne += caractere
        }
        
        console.log(ligne)
    }

}

//Parsing
function getArguments() {
	const args = process.argv.slice(2)
	return args
}
// Gestion d'erreur 
function isValidArguments(args) {
	if (args.length > 1) {
		return arguments
	} else {
		return console.log("Ce script prend au moins 2 arguments en parametres.")
	}
}