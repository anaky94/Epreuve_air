
""" Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.
Exemples d’utilisation :
$> ruby exo.rb 1 2 3 4 5 “+2”
3 4 5 6 7

$> ruby exo.rb 10 11 12 20 “-5”
5 6 7 15


L’opération à appliquer sera toujours le dernier élément.


Afficher error et quitter le programme en cas de problèmes d’arguments.

"""
chaine=+2
chiffre =(1,2,3,4,5,6,7,8,9,10 ,{chaine})

for i in chiffre:
    if isinstance(i,int):
        print(i+(chaine))
    else:
        exit()

        



















