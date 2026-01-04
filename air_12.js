
//Le roi des tris 

/* 
Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri rapide (QuickSort).

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_quick_sort(array) {
	# votre algorithme
	return (new_array)
}

Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6

Afficher error et quitter le programme en cas de problèmes d’arguments.

Wikipedia vous présentera une belle description de cet algorithme de tri.
*/

//Utilitises 
function isValidNumber (value){
	const trimmed = value.trim()
	return (trimmed && !isNaN(Number(trimmed))) ? Number(trimmed) : false
}

function quickSort(array){
	// Cas de base : tableau vide ou 1 élément
	if (array.length <= 1){
		return array 
	}
	
	// Étape 1 : Choisir un pivot (souvent le dernier ou le milieu)
	const pivotIndex = Math.floor(array.length / 2) 
	const pivot = array[pivotIndex]

	// Étape 2 : Partitionner en 3 groupes
	const small = []      // Éléments < pivot
	const equal  = []      // Éléments = pivot
	const tall = []      // Éléments > pivot

	for (const element of array){
		if (element < pivot){
			small.push(element)
		}
		else if (element === pivot){
			equal.push(element)
		}else{
			tall.push(element)
		}
	}

	// Étape 3 : Trier récursivement et concaténer
	return [...quickSort(small), ...equal, ...quickSort(tall)]
}

//Parsing
function getArguments(){
    const args = process.argv.slice(2)
    return args
}

//Gestion d'erreur 
function isValidArguments(args) {
	if (args.length >= 1){
		return args
	}
	console.error("error")
	return false
}

function convertToNumbers(stringArray) {
 const numbers = [] 
 for (const str of stringArray) {
	const num = isValidNumber(str)
	if (num === false && str.trim() !== "0"){
		console.error("error")
		return false
	}
	numbers.push(num)
 }
  return numbers 
}

//Resolution 
function getQuickSort () {
	const args = isValidArguments(getArguments())
	if (!args) return 

	const numbers = convertToNumbers(args)
	if (!numbers) return 

	return quickSort(numbers).join(' ')

}

//Display
function display (){
	const result = getQuickSort()
	if (result) console.log(result)
}

display() 
