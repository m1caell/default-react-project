const fs = require('fs')
const { kebabToPascalCase } = require('./utils')

const modelName = process.argv[2]

if (!modelName) {
  console.log('The model name is required.')
  process.exit()
}

const folderPath = `./src/models/${modelName}`
const filePath = `${folderPath}/${modelName}.model.js`

const className = kebabToPascalCase(modelName)

const fileContent = `export class ${className} {
  constructor({}) {
    
  }
}
`

fs.mkdirSync(folderPath)
fs.writeFileSync(filePath, fileContent)
fs.appendFileSync(
  './src/models/index.js',
  `\nexport { ${className} } from './${modelName}/${modelName}.model'`,
  function(err) {
    if (err) return console.log(err)

    console.log(`Model created in ${filePath}`)
  }
)
