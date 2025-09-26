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



// printer="Crevette magique dans la mer des étoiles" "la"
// mot = "la"
// printer=printer.replace(r"\b({})\b ".format(mot), str(2))
// print(printer)

chaine = "bonjour le monde"
mot="le"

mots=chaine.split((" "))
if (length(mots)>=2)
	mot=mot.replace(mot, str("lr"))
return mots 

printer="crevette magique dans la mer des étoiles la "
mot ="la"

printer = printer.replace(" " + mot +  " "," " )
print(printer) 
