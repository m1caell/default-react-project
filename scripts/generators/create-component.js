const fs = require('fs')
const { kebabToPascalCase } = require('./utils')

const componentName = process.argv[2]

if (!componentName) {
  console.log('The component name is required.')
  process.exit(1)
}

const folderPath = `./src/ui/components/${componentName}`
const filePath = `${folderPath}/${componentName}.component.jsx`
const stylePath = `${folderPath}/${componentName}.style.scss`
const storyPath = `${folderPath}/${componentName}.stories.jsx`

const className = kebabToPascalCase(componentName)

const functionalComponentFileContent = `import React from 'react'
import PropTypes from 'prop-types'

import './${componentName}.style.scss'

const ${className} = ({ classes }) => {
  return (
    <div className="${className}">

    </div>
  )
}

${className}.propTypes = {}

export { ${className} }
`

const styleFileContent = `${className}: {
  
}
`

const storyFileContent = `import { storiesOf } from '@storybook/react'
import React from 'react'
import { ${className} } from './${componentName}.component'

storiesOf('${componentName}', module).add('default', () => <${className} />)
`

fs.mkdirSync(folderPath)
fs.writeFileSync(filePath, functionalComponentFileContent)
fs.writeFileSync(stylePath, styleFileContent)
fs.writeFileSync(storyPath, storyFileContent)
fs.appendFileSync(
  './src/ui/components/index.js',
  `\nexport { ${className} } from './${componentName}/${componentName}.component'`,
  function(err) {
    if (err) return console.log(err)

    console.log(`Component created in ${filePath}`)
  }
)
