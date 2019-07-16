const fs = require('fs')
const { kebabToPascalCase } = require('./utils')

const componentName = process.argv[2]

if (!componentName) {
  console.log('The page name is required.')
  process.exit(1)
}

const folderPath = `./src/ui/pages/${componentName}`
const filePath = `${folderPath}/${componentName}.page.jsx`
const stylePath = `${folderPath}/${componentName}.style.scss`

const className = kebabToPascalCase(componentName)

const componentFileContent = `import React from 'react'
import './${componentName}.style.scss'

const ${className} = () => {
  return (
    <div className="${componentName}">
          
    </div>
  )
}

export { ${className} }
`

const styleFileContent = `${className} {
  
}
`

fs.mkdirSync(folderPath)
fs.writeFileSync(filePath, componentFileContent)
fs.writeFileSync(stylePath, styleFileContent)
fs.appendFileSync(
  './src/ui/pages/index.js',
  `\nexport { ${className} } from './${componentName}/${componentName}.page'`,
  function(err) {
    if (err) return console.log(err)

    console.log(`Page created in ${filePath}`)
  }
)
