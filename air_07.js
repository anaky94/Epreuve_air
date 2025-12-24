/* 
Insertion dans un tableau trié

Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_insert(array, new_element) {
	# your algo
	return (new_array)
}
Exemples d’utilisation :
$> ruby exo.rb 1 3 4 2
1 2 3 4
$> ruby exo.rb 10 20 30 40 50 60 70 90 33
10 20 30 33 40 50 60 70 90

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/



//Utilities
function sortedInsert( tableau, new_element){
   let indexIsertion = tableau.length 

    for (let i = 0; i < tableau.length; i++){
        let valeurCourante = tableau[i]

        if (new_element < valeurCourante){
            indexIsertion = i;
            break
        }
    }        

    let debut = tableau.slice(0, indexIsertion)
    let fin = tableau.slice (indexIsertion)
    return debut.concat([new_element], fin)
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
function checkTheValidNumber(args) {
    for(let i=0; i < args.length - 1; i++ ){
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
function getSortedInsert (){
    let args = getArguments()

    if(!isValidArguments(args)) return
    if(checkTheValidNumber(args)) return

    //Extraction du dernier élément (celui à insérer) 
    const  add = Number(args.pop())
    //Conversion du rest en tableau de nombre
    const sortedList = args.map(Number)

    return (sortedInsert(sortedList, add).join(' '));

}
//Affichage 
function display(){
    let result = getSortedInsert()
    if (result){
        console.log(result)
    }
}

display()