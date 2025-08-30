const bedrockServer = require('bdse/bedrockserver.js')
const events = require('bdse/events.js')

events.on('blockPlace', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} placed block: ${ev.block} at (${ev.location.x}, ${ev.location.y}, ${ev.location.z})`)
})

events.on('blockBreak', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} broke block: ${ev.block} at (${ev.location.x}, ${ev.location.y}, ${ev.location.z})`)
})

events.on('playerSpawn', (ev) => {
    console.log(`[PLUGIN] ${ev.player.name} spawned.`)
})

events.on('entitySpawn', (ev) => {
    console.log(`[PLUGIN] Entity ${ev.entity} spawned at (${ev.location.x}, ${ev.location.y}, ${ev.location.z})`)
})

events.on('entityDie', (ev) => {
    console.log(`[PLUGIN] Entity ${ev.entity} died at (${ev.location.x}, ${ev.location.y}, ${ev.location.z})`)
})

events.on('entityRemove', (ev) => {
    console.log(`[PLUGIN] Entity removed: ${ev.removedEntity}`)
})

events.on('effectAdd', (ev) => {
    console.log(`[PLUGIN] ${ev.entity.name} effect added to ${ev.effect}`)
})
