/*
Mélanger deux tableau triés 
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
*/

//Utilities
function sortedFusion (array1, array2){
	let result = []

	let i = 0
	let j = 0

	while (i < array1.length || j < array2.length) {
		if (i >= array1.length || (j < array2.length && array2[j] < array1[i])){
			result.push(array2[j])
			j++
		}else {
			result.push(array1[i])
			i++
		}
	}
	return result
}
console.log(sortedFusion())


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
function checkTheValidNumber(args) {
    for(let i = 0; i < args.length - 1; i++ ){
        const arg = args[i]
        if (arg.trim() === "" || (isNaN(Number(arg)))){
            console.error(`Erreur : ce n'est pas un nombre valide`);
            console.info("Exemple : node script.js 4 6 12 ");
            return true
        }
    }
    return false
}

//Resolution 
function getSortedFusion() { 
	let args = getArguments()

	if(!isValidArguments(args)) return
    if(checkTheValidNumber(args)) return

	
}

//Display



