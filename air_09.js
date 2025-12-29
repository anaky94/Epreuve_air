
/* Rotation vers la gauche 
Créez un programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.

Utilisez une fonction de ce genre (selon votre langage) :
ma_rotation(array) {
	# votre algorithme
	return (new_array)
}
Exemples d’utilisation :
$> python exo.py “Michel” “Albert” “Thérèse” “Benoit”
Albert, Thérèse, Benoit, Michel
*/
//Utilities
function my_rotation (table){
	if (table.length === 0){
		return []
	} else {
		const first_element = table[0]
		const rest_table = table.slice(1)
		const new_table = rest_table.concat([first_element])

		return new_table
	}
}


//Parsing 
function getArguments(){
    const args = process.argv.slice(2)
    return args
}

//Gestion d'erreur 
function isValidArguments (args){
    if (args.length < 2 ) {
        console.error("error")
        return false
    }
    return true
}


//Resolution 
function getMyRotation(){
	let args = getArguments()

	if (!isValidArguments(args)) return 
	
	let result = my_rotation(args)
	return result.join(' ')

}

//Display 
function display() {
	let result = getMyRotation()
	if (result) {
		console.log(result)
	}
}

display()























