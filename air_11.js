
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
/* 
FONCTION afficherPyramide(caractere, nombreEtages):
    
    POUR chaque étage de 1 à nombreEtages:
        
        // Calculer les éléments de cette ligne
        nombreEspaces = nombreEtages - étage
        nombreCaracteres = (étage * 2) - 1
        
        // Construire la ligne
        ligne = ""
        
        // Ajouter les espaces au début
        RÉPÉTER nombreEspaces fois:
            ligne = ligne + " "
        
        // Ajouter les caractères
        RÉPÉTER nombreCaracteres fois:
            ligne = ligne + caractere
        
        // Afficher la ligne
        AFFICHER(ligne)

*/