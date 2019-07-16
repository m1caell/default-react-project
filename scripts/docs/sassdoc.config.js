require('sassdoc')(
  [
    './src/*.scss',
    './src/**/*.scss',
    './src/**/**/*.scss',
    './src/**/**/**/*.scss'
  ],
  { verbose: true, dest: 'docs/sassdocs' }
)
  .then(
    () => console.log('Your documentation has been generated!'),
    console.error
  )
  .catch(e => console.log(e))
