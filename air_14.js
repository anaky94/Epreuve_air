//Air ok 

/* Créez un programme qui célèbre votre victoire.
Exemples d’utilisation :
$> python exo.py
J’ai terminé l’Épreuve de l’Air et c’était [].
$>
Note : [] est à remplacer par un adjectif de votre choix (facile ?)
 */

//Parsing
function getArguments(){
    return process.argv.slice(2);
}


//Gestion d'erreur
function validateArguments (args){
    if (!args || args.length === 0){
        console.log("erreur : aucun argument fournis")
        exit(1);
    }
}

//Utilitises
function endAir (choice){
    console.log(`j'ai terminer les épreuve de l'eau s'etait ${choice}`)
    return[];
}

//Resolution 
function display (){
    args = getArguments();

    if (!validateArguments(args));

    const words = endAir(args);
    console.log(words);
}

display();