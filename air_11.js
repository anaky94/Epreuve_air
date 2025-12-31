
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
    for( let i = 1; i <= numberFloor.length; i++ )
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

console.log(displayPyramid("o", 3))