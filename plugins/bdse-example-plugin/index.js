const bedrockServer = require('bdse/bedrockserver.js')
const events = require('bdse/events.js')

bedrockServer.on('playerJoin', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} joined!`)
    bedrockServer.executeCommand(`say Welcome, ${ev.player.name}!`)
})

bedrockServer.on('playerLeave', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} left.`)
})

bedrockServer.on('itemUse', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} used item: ${ev.item}`)
})

bedrockServer.on('blockPlace', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} placed block: ${ev.block} at (${ev.location.x}, ${ev.location.y}, ${ev.location.z})`)
})

bedrockServer.on('blockBreak', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} broke block: ${ev.block} at (${ev.location.x}, ${ev.location.y}, ${ev.location.z})`)
})

bedrockServer.on('playerSpawn', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} spawned.`)
})

bedrockServer.on('entitySpawn', (ev) => {
    console.log(`[PLUGIN] Entity ${ev.entity} spawned at (${ev.location.x}, ${ev.location.y}, ${ev.location.z})`)
})

bedrockServer.on('entityDie', (ev) => {
    console.log(`[PLUGIN] Entity ${ev.entity} died at (${ev.location.x}, ${ev.location.y}, ${ev.location.z})`)
})

bedrockServer.on('entityRemove', (ev) => {
    console.log(`[PLUGIN] Entity removed: ${ev.removedEntity}`)
})

bedrockServer.on('effectAdd', (ev) => {
    console.log(`[PLUGIN] ${ev.entity.name} effect added to ${ev.effect}`)
})

bedrockServer.on('chatSend', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} said: ${ev.message}`)
  
    if (ev.message === '!tpme') {
        bedrockServer.executeCommand(`teleport ${ev.player.name} 0 100 0`)
    }

    if (ev.message === '!form') {
        const form = {
            title: 'Welcome!',
            body: 'Choose an action:',
            buttons: [
                { text: 'Say Hello' },
                { text: 'Say Goodbye' }
            ]
        }
        
        bedrockServer.forms.showActionForm(ev.player, form)
    }
})

bedrockServer.on('formResponse', (ev) => {
    console.log(`[PLUGIN] Player ${ev.player.name} selected option ${ev.selection} for form ${ev.formId}`);
    
    if (ev.selection === 0) {
        bedrockServer.executeCommand(`say Hello, ${ev.player.name}!`)
    } else if (ev.selection === 1) {
        bedrockServer.executeCommand(`say Goodbye, ${ev.player.name}!`)
    }
})
