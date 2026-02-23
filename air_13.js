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


//Definir Les exercices
const exercices = [
  // air 0 
  {
    name: "air00",
    file: "air_00.js",
    tests: [
      { args: ["Bonjour les gars"], expected: "bonjour\nles\ngars" }
    ]
  },
  
  // air 1 - Split en fonction
  {
    name: "air01",
    file: "air_01.js",
    tests: [
      { args: ["Crevette magique dans la mer des étoiles", "la"], expected: "Crevette magique dans \nmer des étoiles" }
    ]
  },
  
  // air 2 - Concat
  {
    name: "air02",
    file: "air_02.js",
    tests: [
      { args: ["je", "teste", "des", "trucs", " "], expected: "je teste des trucs" }
    ]
  },
  
  // air 3 - Chercher l'intrus
  {
    name: "air03",
    file: "air_03.js",
    tests: [
      { args: ["1", "2", "3", "4", "5", "4", "3", "2", "1"], expected: "5" }
    ]
  },
  
  // air 4 - Un seul à la fois
  {
    name: "air04",
    file: "air_04.js",
    tests: [
      { args: ["Hello milady,   bien ou quoi ??"], expected: "Helo milady, bien ou quoi ?" }
    ]
  },
  
  // air 5 - Sur chacun d'entre eux
  {
    name: "air05",
    file: "air_05.js",
    tests: [
      { args: ["1", "2", "3", "4", "5", "+2"], expected: "3 4 5 6 7" }
    ]
  },
  
  // air 6 - Contrôle pass sanitaire
  {
    name: "air06",
    file: "air_06.js",
    tests: [
      { args: ["Michel", "Albert", "Thérèse", "Benoit", "t"], expected: "Albert\nThérèse\nBenoit" }
    ]
  },
  
  // air 7 - Insertion triée
  {
    name: "air07",
    file: "air_07.js",
    tests: [
      { args: ["1", "3", "4", "2"], expected: "1 2 3 4" }
    ]
  },
  
  // air 8 - Fusion tableaux triés
  {
    name: "air08",
    file: "air_08.js",
    tests: [
      { args: ["10", "20", "30", "fusion", "15", "25", "35"], expected: "10 15 20 25 30 35" }
    ]
  },
  
  // air 9 - Rotation
  {
    name: "air09",
    file: "air_09.js",
    tests: [
      { args: ["Michel", "Albert", "Thérèse", "Benoit"], expected: "Albert Thérèse Benoit Michel" }
    ]
  },
  
  // air 10 - Read file
  {
    name: "air10",
    file: "air_10.js",
    tests: [
      { args: ["main.js"], expected: "je suis koco" }  // adapte selon ton fichier
    ]
  },
  
  // air 11 - Pyramide
  {
    name: "air11",
    file: "air_11.js",
    tests: [
      { args: ["O", "5"], expected: "    O\n   OOO\n  OOOOO\n OOOOOOO\nOOOOOOOOO" }
    ]
  },
  
  // air 12 - QuickSort
  {
    name: "air12",
    file: "air_012.js",
    tests: [
      { args: ["6", "5", "4", "3", "2", "1"], expected: "1 2 3 4 5 6" }
    ]
  },
  
  // air 14 - Dernier
  {
    name: "air14",
    file: "air_14.js",
    tests: [
      { args: [], expected: "" }
    ]
  }
];





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
                console.log(`${exercise.name} (${i+1}/${exercise.tests.length}) ${ROUGE}failure${RESET}`)
                if(testResult.reason){
                    console.log(`reason: ${testResult.reason}`)
                }
            }
        }
    }

    console.log(`\n${VERT}Total sucess: (${successCount}/${totaltests}${RESET})`)
}

runMetaTest()



















