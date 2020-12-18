//the order is 456 123 789
const events = require('events');
let eventsEmitter = new events.EventEmitter();

setTimeout(()=>{
    eventsEmitter.emit('one',function fn(){
        console.log(456);
    })
},1000)

eventsEmitter.on('one', callback => {
    callback();
    eventsEmitter.emit('two',function fn2(){
        console.log(123);
    })
})
eventsEmitter.on('two', callback => {
    callback();
    eventsEmitter.emit('three',function fn3(){
        console.log(789)
    })
})
eventsEmitter.on('three', callback=>{
    callback();
})