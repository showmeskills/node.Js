// node js events
const EventEmitter = require('events')

let myEmitter = new EventEmitter();

myEmitter.on('xxx',(a,b)=>{
    console.log('事件触发了!!!')
    console.log(a)
    console.log(b)
})

myEmitter.emit('xxx',66,{name:'six'})