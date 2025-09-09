/* CONTACT  
Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

Votre programme devra intégrer une fonction prototypée comme ceci :
ma_fonction(string_à_couper, string_séparateur)
 { // syntaxe selon votre langage

	# votre algorithme

	return (tableau)
}
Exemples d’utilisation :
$> python exo.py “Crevette magique dans la mer des étoiles” “la”
Crevette magique dans 
 mer des étoiles

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/



 

printer="Crevette magique dans la mer des étoiles" "la"
mot = "la"
printer=printer.replace(r"\b({})\b ".format(mot), str(2))
print(printer)

chaine = "bonjour le monde"
mot="le"

mots=chaine.split((" "))
if len(mots)>=2:
	mot=mot.replace(mot, str("lr"))
return mots 

printer="crevette magique dans la mer des étoiles la "
mot ="la"

printer = printer.replace(" " + mot +  " "," " )
print(printer) 