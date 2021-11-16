const EventEmmiter = require('events');

const customEmitter = new EventEmmiter()

customEmitter.on('eventName',(name,id)=>{
    console.log(`Data received : ${name} ${id}`)
})

customEmitter.on('eventName',()=>{
    console.log('More data received')
})

customEmitter.on('someOther',()=>{
    console.log('Some other logic')
})

customEmitter.emit('eventName','Himanshu',22)
customEmitter.emit('someOther')