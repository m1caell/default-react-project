;(async () => {
  const isWindows = process.platform === 'win32'

  await require('open')('docs/sassdocs/index.html', {
    app: isWindows ? 'chrome' : 'google chrome'
  })
})()
