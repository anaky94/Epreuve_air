
"""
Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.
Exemples d’utilisation :
$> ruby exo.rb O 5
    O
   OOO
  OOOOO
 OOOOOOO
OOOOOOOOO

Afficher error et quitter le programme en cas de problèmes d’arguments.

"""

print("Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.")


for i in range(0, 10):
    print(" " * (10 - i) + "O" * i * 2)