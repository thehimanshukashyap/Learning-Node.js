// OS MODULES
const os = require('os')

// Info about current user
const user = os.userInfo()

// Method to return the system uptime in seconds
const uptime = os.uptime()
console.log(`Uptime: ${uptime}`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    platform : os.platform(),
    totalMermory : os.totalmem(),
    freeMemory : os.freemem(),
    usedMemory : os.totalmem() - os.freemem(),
}

console.log(currentOS)