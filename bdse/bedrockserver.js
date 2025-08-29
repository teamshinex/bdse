const chalk = require('chalk')
const data = require('./data.js')
const forms = require('./forms.js')
const events = require('./events.js') // 전역 이벤트 버스

let bdsProcess = null

const bdse = {
    data,
    forms,
    events, // 플러그인에 이벤트를 노출

    init: (bdsProcessInstance) => {
        bdsProcess = bdsProcessInstance
        
        bdsProcess.on('exit', (code) => {
            console.log(chalk.red('\n[BDSE] Server stopped.'))
            process.exit(code)
        })
    },
    
    executeCommand: (cmd) => {
        if (bdsProcess) {
            bdsProcess.stdin.write(cmd + '\n')
        }
    },
    
    on: (eventName, listener) => {
        events.on(eventName, listener)
    }
}

module.exports = bdse
