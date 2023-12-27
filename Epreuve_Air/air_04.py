"""Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.

Exemples d’utilisation :
$> python exo.py 1 2 3 4 5 4 3 2 1
5
$> python exo.py bonjour monsieur bonjour
monsieur
Afficher error et quitter le programme en cas de problèmes d’arguments.
"""



"""
nombre = [1, 12, 3, 4, 5, 4, 3, 2, 1]
somme=0

for i in nombre:
    if i % 2 == 0:
        if i ==0:
            return i
        else:
            somme = somme + i
print(somme)
"""

"""
if somme % 2 == 0:
    print("paire")
    print(somme)
else:
    print("non paire")
"""

nombre = [1, 12, 3, 7, 5, 4, 3, 2, 1]
valeur_sans_paire= None

for i in nombre:
    if i %2 !=0:
        valeur_sans_paire=i
        break
if valeur_sans_paire is None:
    print("LA  valeur de la liste qui n'a pas de nobre pair est  ",valeur_sans_paire)
else:
    print("ils son tous Pair")







