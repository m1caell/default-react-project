import { configure } from '@storybook/react'
import '../src/ui/styles/main.scss'

// automatically import all files ending in *.stories.jsx
const req = require.context('../src', true, /\.stories\.jsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)