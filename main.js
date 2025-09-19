

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
				tableResult.push(currentString)
				currentString = ""
			}
		} else {
			currentString += char
		}
	}

	if (currentString !== "") {
		tableResult.push(currentString)
	}

	return tableResult
}

console.log(split("bonjour les gens", "le","gens"))
split("bonjour","les", "gens")