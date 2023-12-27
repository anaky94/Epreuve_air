
"""
Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
	# your algo
	return (new_array)
}


Exemples d’utilisation :
$> ruby exo.rb 10 20 30 fusion 15 25 35
10 15 20 25 30 35


Afficher error et quitter le programme en cas de problèmes d’arguments.


"""

array1 = [10, 20, 30]
array2 = [3, 25, 35]

def fusion(array1, array2):
    array1.extend(array2)
    array1.sort()
    return array1
print(fusion(array1, array2))












