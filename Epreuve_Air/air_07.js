""" Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

Utilisez une fonction de ce genre (selon votre langage) :
ma_fonction(array_de_strings, string) {
	# votre algorithme
	return (nouvel_array_de_strings)
}
Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “t”
Michel

$> python exo.py “Michel” “Albert” “Thérèse” “Benoit” “a”
Michel, Thérèse, Benoit

Afficher error et quitter le programme en cas de problèmes d’arguments.
"""

#1 mettre les mots dans une variable
#2 afficher les mots qui contiennent la lettre t
#3 affiher les mot qui contiennent la lettre a
#4 supremier les mots qui ne contiennent pas la lettre t

chaine = "t"

var=[   "Michel", "Albert" ,"Thérèse", "Benoit" ,"c", "beatrit", "toto" ]

for element in var:
        tranche_pas = element.find(chaine)
        if tranche_pas != -1:
            delete = var.remove("toto")
            print(var)
            
       


"""
for i in var:
    
    print(var.find(chaine))
    print(var[i])
"""
"""if var [i] == chaine:
        del var[i]
    else:
        print(var[i])"""
    
















