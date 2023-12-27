import re
"""
Un seul à la fois
    Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.


Exemples d’utilisation :
$> python exo.py “Hello milady,   bien ou quoi ??”
Helo milady, bien ou quoi ?


Afficher error et quitter le programme en cas de problèmes d’arguments.

"""

chaine="Hello milady,   bien ou quoi ??"

chaine1= re.sub(r"(\w)\1+|\?{2,}", r"\1?", chaine)

print(chaine1)
























