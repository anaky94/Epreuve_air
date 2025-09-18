

// console.log(chekNoNumbers(22))
// console.log(chekNoNumbers("bonjour"))
// Function pour vérifié si un nombre peut etre valid ou pas
/* function chekNoNumbers(arguments) {
	for (const argument of arguments){
		if (typeof argument === 'number' && !isNaN(argument)) { // si argument est un nombre valide 
		console.error("Error")
		return false
		}
	}
	return true
} */

	function split(array) {
	array = []
	let currentString = ""
	const separator = [" " ,"\t", "\n",]
	
	for (let i = 0; i < currentString.length; i++) {
		const char = currentString[i]
		if (separator.includes(char)) {
			if (currentString !== "") {
				array.push(currentString)
				currentString = ""
			}
		} else {
			currentString += char
		}
	}

	if (currentString !== "") {
		array.push(currentString)
	}

	return array 
}

console.log(split("bonjour", "les", "gars"))
split("bonjour les gens ")