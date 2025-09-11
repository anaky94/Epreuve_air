

"""

Créez un programme qui affiche le contenu d’un fichier donné en argument.
Exemples d’utilisation :
$> cat a.txt
Je danse le mia
$> ruby exo.rb “a.txt”
Je danse le mia
Afficher error et quitter le programme en cas de problèmes d’arguments ou de fichier inaccessible.

"""


try:
    with open("mon_fichir.txt", "r") as f:

        print(f.read())

except FileNotFoundError:
    print("erreur fichier introuvable")
