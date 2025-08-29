const bedrockServer = require('./bedrockserver.js')

const forms = {
    showActionForm: (player, formJson) => {
        const formId = Math.random().toString(36).substring(7)
        const payload = JSON.stringify(formJson)
        const command = `tellraw "${player.name}" {"rawtext":[{"text":"!bdse form_show|action|${payload}|${formId}"}]}`

        bedrockServer.executeCommand(command)
    }
}

module.exports = forms