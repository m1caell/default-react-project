const fs = require('fs')
const { kebabToCamelCase } = require('./utils')

const hookName = process.argv[2]

if (!hookName) {
  console.log('The hook name is required.')
  process.exit()
}

const effectRegex = /use.*/

if(!effectRegex.test(hookName)) {
  console.log('The hook name must init with "use". Ex.: useAuth.')
  process.exit(1)
}

const folderPath = `./src/hooks/${hookName}`
const filePath = `${folderPath}/${hookName}.hook.js`

const className = kebabToCamelCase(hookName)


const fileContent = `export const ${className} = () => {

}
`

fs.mkdirSync(folderPath)
fs.writeFileSync(filePath, fileContent)
fs.appendFileSync(
  './src/hooks/index.js',
  `\nexport { ${className} } from './${hookName}/${hookName}.hook'`,
  function(err) {
    if (err) return console.log(err)

    console.log(`Hook created in ${filePath}`)
  }
)
