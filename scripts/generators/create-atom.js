const fs = require('fs')
const { kebabToPascalCase } = require('./utils')

const atomName = process.argv[2]
const isVoid = process.argv[3] || false

if (!atomName) {
  console.log('The atom name is required.')
  process.exit(1)
}

const folderPath = `./src/ui/atoms/${atomName}`
const filePath = `${folderPath}/${atomName}.atom.jsx`

const className = kebabToPascalCase(atomName)

const voidAtom = `<${atomName} {...props} />`
const contentAtom = `<${atomName} {...props}>
    {props.children}
  </${atomName}>
`

const fullFileContent = `import React from 'react'

export const ${className} = props => {
  return ${isVoid ? voidAtom : contentAtom}
}
`

fs.mkdirSync(folderPath)
fs.writeFileSync(filePath, fullFileContent)
fs.appendFileSync(
  './src/ui/atoms/index.js',
  `\nexport { ${className} } from './${atomName}/${atomName}.atom'`,
  function(err) {
    if (err) return console.log(err)

    console.log(`Atom created in ${filePath}`)
  }
)
