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
            {args: ["10","20","30", "fusion", "15", "25", "35"], expected:"10 15 20 25 30 35"}
        ]
    },
]

function runtest(file, args, expected){
    try 
    {

        if (!fs.existsSync(file)){
            return { sucess: false, reason:"file not found"}
        }
        const command = `node ${file} ${args.join(' ')}`

        const result = execSync(command, {encoding: 'utf8', stdio: 'pipe'})

        const success = result.trim() === expected.trim()
        return { success, result: result.trim() }

    } catch (error) {
        return { sucess: false, reason: "error during execution"}

    }

}

function reunMetaTest() {
    let totaltests = 0
    let successCount = 0
    for (const exercise of exercices){
        console.log(`\ntesting ${exercise.name}:` )

        for (let i=0; i< exercise.tests.length; i++) {
            totaltests++
            const test = exercise.tests[i]
            const testResult = runtest(exercise.file, test.args, test.expected)

            if(testResult.success){
                console.log(`${exercise.name} (${i+1}/${exercices.tests.length}): ${GREEN}sucess${RESET}`)
                successCount++
            }else{
                console.log(`${exercise.name} (${i+1}/${exercise.tests.length}) ${GREEN}success${RESET}`)
                if(testResult.reason){
                    console.log(`reason: ${testResult.reason}`)
                }
            }
        }
    }

    console.log(`\n ${GREEN}Total scess: (${successCount})`)
}
FONCTION lancerMetaTest():
    // Initialiser les compteurs
    totalTests = 0
    testReussis = 0
    
    // Définir la liste des exercices à tester
    exercices = [
        {
            nom: "air00-insertion",
            fichier: "./air00.js",
            tests: [
                { arguments: ["1", "3", "4", "2"], resultatAttendu: "1 2 3 4" },
                { arguments: ["10", "20", "15"], resultatAttendu: "10 15 20" }
            ]
        },
        {
            nom: "air01-fusion",
            fichier: "./air01.js",
            tests: [
                { arguments: ["10", "20", "fusion", "15", "25"], resultatAttendu: "10 15 20 25" }
            ]
        }
        // ... autres exercices
    ]
    
    // Parcourir tous les exercices
    POUR chaque exercice dans exercices:
        AFFICHER "Testing " + exercice.nom
        
        // Vérifier si le fichier existe
        SI NON verifierFichierExiste(exercice.fichier):
            AFFICHER exercice.nom + " : fichier manquant"
            CONTINUER au prochain exercice
        
        // Parcourir tous les tests de cet exercice
        POUR chaque test dans exercice.tests (index i):
            totalTests = totalTests + 1
            numeroTest = i + 1
            nombreTestsTotal = longueur(exercice.tests)
            
            // Exécuter le test
            resultat = executerExercice(exercice.fichier, test.arguments)
            
            // Vérifier si l'exécution a réussi
            SI resultat.succes == faux:
                AFFICHER exercice.nom + " (" + numeroTest + "/" + nombreTestsTotal + ") : " + ROUGE + "failure" + RESET
                CONTINUER
            
            // Comparer le résultat obtenu avec le résultat attendu
            testPasse = comparerResultats(resultat.resultat, test.resultatAttendu)
            
            SI testPasse:
                AFFICHER exercice.nom + " (" + numeroTest + "/" + nombreTestsTotal + ") : " + VERT + "success" + RESET
                testReussis = testReussis + 1
            SINON:
                AFFICHER exercice.nom + " (" + numeroTest + "/" + nombreTestsTotal + ") : " + ROUGE + "failure" + RESET
                // Optionnel: afficher ce qui était attendu vs obtenu
    
    // Afficher le résumé final
    AFFICHER ""
    AFFICHER "Total success: (" + testReussis + "/" + totalTests + ")"


// Point d'entrée
lancerMetaTest()

*/


















