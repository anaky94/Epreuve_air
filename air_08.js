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

	for (; i < array1.length && j < array2.length;) {
		if(array1[i] < array2[j] ){
			result.push(array1[i])
			i++
		}else {
			result.push(array2[j])
			j++
		}
	}

	for (; i< array1.length; i++) {
		result.push(array1[i])
	}
	for (; j < array2.length; j++){
		result.push(array2[j])
		
	}
	return result
}
//Parsing 
function getArguments(){
    const args = process.argv.slice(2)
    return args
}

//Gestion d'erreur 
function isValidArguments (args){
    if (args.length >= 3 && args.includes("fusion")) {
        return args
    }
	console.error("error")
    return false
}

function checkTheValidNumber(args){
    for (let i = 0; i < args.length; i++){
        const trimmed = args[i].trim();
        if (!trimmed || isNaN(Number(trimmed))){
            console.error(`Erreur`)
            return true
        }
    }
    return false
}

//Resolution 
function getSortedFusion(){ 
	const args = isValidArguments(getArguments())
	if(!args) return 

	
	const fusionIndex = args.indexOf("fusion")

	const array1 = args.slice(0, fusionIndex).map(Number)
	const array2 = args.slice(fusionIndex + 1).map(Number)

	if (!array1 || !array2){
		console.error("error")
		return
	}

	return sortedFusion(array1, array2).join(' ')
}

//Display
function display(){
	const result = getSortedFusion()
	if(result){
		console.log(result)
		}
}

display()


