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
const fs = require ('fs')

const VERT = '\x1b[32m'
const ROUGE = '\x1b[31m' 
const  RESET = '\x1b[0m'


//Definir Les exercices
const exercices = 
[
    {
        name: "air00-sortedInsert",
        file: "./air00.js",
        tests: [
            {args: ["1","3","4","2"], expected: "1 2 3 4"},
            {args: ["10", "20", "30", "40", "50", "60", "70", "90", "33"], expected:"10 20 30 40 50 60 70 90"}
        ]
    },

    {
        name: "air01-sortedFusion",
        file: "./air01.js",
        tests: [
            {args: ["10","20","30", "fusion", "15", "25", "35"], expected:"10 20 30 33 40 50 25 60 70 90"}
        ]
    },
]

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



















