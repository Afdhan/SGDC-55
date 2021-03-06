//console.log('Starting SGDC-BOT...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('=============================================', {
  font: 'console',
  align: 'center',
  colors: ['red'],
  gradient: false
})
CFonts.say(`${package.name}`, {
  font: 'pallet',
  align: 'center',
  colors: ['whiteBright','red'],
  background: 'transparent',
  letterSpacing: 0,
  lineHeight: 1,
  space: false,
  maxLength: '0', 
  gradient: false,
  independentGradient: false,
  transitionGradient: false,
  env: 'node'
})
CFonts.say('=============================================', {
  font: 'console',
  align: 'center',
  colors: ['red'],
  gradient: false
})
CFonts.say(`Tetaplah menjadi dirimu sendiri|jangan pernah mencoba menjadi orang lain|Karena satu rasa bukan berarti satu raga.\n\nPluto, 20 April 2021`, {
  font: 'console',
  align: 'center',
  colors: ['cyan'],
  letterSpacing: 0,
  space: false,
  gradient: true,
})
CFonts.say(`\n\n${package.name}@${package.version}\n----------------------\nMUHAMMAD AFDHAN`, {
  font: 'console',
  align: 'center',
  colors: ['red']
})
function start(file) {
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    colors: ['gray'],
    gradient: false
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('SGDC-BOT [ RECEIVED ] =>', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })

}

start('dhans.js')
