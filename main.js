

// premiere info c'est transformer une chaine de caractère en tableau
// EN ENTRe le programme doit comprendre 2 deux arguments 
// en fonction du séparateur donc (si le séparateur est un espace " ")
// et en sortis le programme 

/* join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur. */



//Resolution 
function getTransformArrayInstring() {
	let args = getArguments()
	// console.log("1 - args recus",args, "longeur",args.lenght)

	if (!isValidArguments(args) || !rejectNumber(args)){
		// console.log("2 - bloqué par isValid")
		return 
	}

	// console.log("3 - isvalid passé")


	const strings = args.slice(0, -1)
		// console.log("5 - rejectNumber")
	

	const separatorStrings = args [args.length - 1]
	// console.log("6 ",strings, "sparator : ", separatorStrings)

	let result = transformArrayInstring(strings, separatorStrings)
	// console.log("result",result)
	return result
}
