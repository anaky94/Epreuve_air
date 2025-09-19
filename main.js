
function splitTable(array) {
	tableResult = []
	let  currentString = ""
	const separator = [" ",'\t', '\n', ]
	for (let i = 0; i < currentString.length; i++) {
		const char =  currentString[i]
		if (separator.includes(char[i])) {
			if ( currentString !== "") {
				tableResult.push( currentString)
				 currentString = [i]
			}
		} else {
			 currentString += char 
		}
	}

	if ( currentString !== "") {
	    tableResult.push( currentString)
	}
	return tableResult
    
}

console.log(splitTable("bonjour", "les gens", "bonjour"));

