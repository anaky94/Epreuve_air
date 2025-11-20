
/* """ Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

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
 */

/* Fonction filtrerTableau(tableau, chaineRechercher) 
        creer nouveau tableau vide 

        pour chaque element Dans tableau 
            si element Contien chaineRecherche:
                Ajouter element A nouveauTableau 
        
                retourner Nouveau tableau 
        */        

function filterTable( table,  stringResearch){
    let newArrayOfStrings = []

    for (let i =0; i < table.length; i++){
        let element = table[i]
        if (element.toLowerCase().includes(stringResearch.toLowerCase())){
            newArrayOfStrings.push(element)
        }
    }
    return newArrayOfStrings
}


console.log(filterTable(["michel","mimi", "yael", "aya"],"a"))
//parsing
function getArguments() {
    const args = process.argv.slice(2)
    return args 
}

//Gestion d'erreur 
function isValidArguments(args) {
    if (args.length < 3)
        console.error("Erreur")
    return false
}

function rejectNumber(args) {
	for (const elements of args){
		if (!isNaN(Number(elements))){
	      console.error('Erreur')
	      return false
	    }
	}
	return true 
}














