
function stringsCarac (storStrings) {
    if ( storStrings.length === 0 ){
        return 
    }
    let resultat = storStrings[0]
    for (let i = 1; i < storStrings.length; i++){
        if (storStrings[i] != resultat[resultat.length]){
            resultat  += storStrings[i]
        }
    }
    
    return resultat 
}