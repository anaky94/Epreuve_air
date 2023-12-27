"""
Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.

Utilisez une fonction de ce genre (selon votre langage) :
ma_rotation(array) {
	# votre algorithme
	return (new_array)
}
Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
Albert, Thérèse, Benoit, Michel
Afficher error et quitter le programme en cas de problèmes d’arguments.
"""
#j'affiche les élements du tableau
# je t 
array = ["Michel", "Albert", "Thérèse", "Benoit"]

print(array[1:] )
print([array [0]])
print( array[1:] + [array [0]], end=" ")