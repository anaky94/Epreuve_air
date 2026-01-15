// Meta exercice 

/* 
Créez un programme qui vérifie si les exercices de votre épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent (sauf celui là). Créez au moins un test pour chaque exercice.

Exemples d’utilisation :
$> python exo.py
air00 (1/3) : success
air00 (2/3) : success
air00 (3/3) : success
air01 (1/2) : success
air01 (2/2) : failure
air02 (1/1) : success
... 
Total success: (56/62)

Bonus : trouvez le moyen d’utiliser du vert et du rouge pour rendre réussites et échecs plus visibles.
*/
const {execSync} = require ('child_process')
// const fs = require ('fs')
const {readdirSync} = require("fs")
const { extname } = require('path')
const tests {require} ("/.tests.jsin")


const VERT = '\x1b[32m'
const ROUGE = '\x1b[31m' 
const  RESET = '\x1b[0m'


function getFilesRequire(){
const getFilesRequired = [
    "air00.js",
    "air01.js",
    "air02.js",
    "air03.js",
    "air04.js",
    "air05.js",
    "air06.js",
    "air07.js",
    "air08.js",
    "air09.js",
    "air10.js",
    "air11.js",
    "air12.js", 
]
    return getFilesRequired
}

function getFilesWanted(){
    const fileNames = readdirSync(__dirname)
    const filesWanted = fileNames.filter((file) => extname(file) === ".js")
    filesWanted.pop()
    return filesWanted
}

function isValidFiles (filesRequired, filesWanted){
    if (filesRequired.length !== filesWanted.length) {
        console.error("lenombre de fichier n'est pas le même")
        return 
    }
    for (const file of filesWanted) {
        if(!filesRequired.includes(file)){
            console.error("Fichier non requis")
            return
        }
    }
    return filesWanted 
}

function checkTest (stoutCleared, index, exercise, totalSucesss) {
    if (stoutCleared === exercise.results[index]){
        console.log(`${exercise.exercise} (${index+1}/${exercise.results.length}) :sucess`)
        totalSucesss++
    }else {
        console.log($`{erxercise.exercise} (${index+1}/${exercise.results.length}) : failure`)
    }
    return totalSucesss
}

function executeTest (tests){
    let totalSucesss = 0
    let numberOftests = 0
    for (const exercise of tests) {
        for(let index = 0; index < exercise.entries.length; index++){
            const entry = exercise.entries[index]
            const exerciseName = exercise.exercise
            
        try {
            const stdout = execSync (`node ${exerciseName} ${entry}`).toString()
            
        }
        }

        
    }
}

/*
function runtest(file, args, expected){
    try 
    {

        if (!fs.existsSync(file)){
            return { success: false, reason:"file not found"}
        }
        const command = `node ${file} ${args.join(' ')}`
        const result = execSync(command, {encoding: 'utf8', stdio: 'pipe'})
        const success = result.trim() === expected.trim()
        return { success, result: result.trim() }

    } catch (error) {
        return { success: false, reason: "error during execution"}

    }

}


function runMetaTest() {
    let totaltests = 0
    let successCount = 0

    for (const exercise of exercices){
        console.log(`\ntesting ${exercise.name}:` )

        for (let i=0; i< exercise.tests.length; i++) {
            totaltests++
            const test = exercise.tests[i]
            const testResult = runtest(exercise.file, test.args, test.expected)

            if(testResult.success){
                console.log(`${exercise.name} (${i+1}/${exercices.tests.length}): ${VERT}success${RESET}`)
                successCount++
            }else{
                console.log(`${exercise.name} (${i+1}/${exercise.tests.length}) ${ROUGE}failure
                ${RESET}`)
                if(testResult.reason){
                    console.log(`reason: ${testResult.reason}`)
                }
            }
        }
    }

    console.log(`\n ${VERT}Total sucess: (${successCount}/${totaltests}${RESET})`)
}

runMetaTest()

*/

















