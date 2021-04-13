//using EventEmitter to resolve callback 
const fs = require('fs');
const path = require('path');
const events = require('events');
const EventEmitter = new events.EventEmitter();
let content = 'this is a content in EventEmitter to resolve async and sync'

fs.writeFile(path.join(__dirname, 'test1.txt'),content,(err) => {
        if(err){
            console.log('the file is not created')
        }else{
            fn();
        }
        function fn(){
            fs.readFile(path.join(__dirname, 'test1.txt'),(err,data) => {
                if(err){
                    console.log('the file is not existed')
                }
                EventEmitter.emit('to-data',data);
            })
        }
})
EventEmitter.on('to-data',data=>{
    console.log('the file has been read');
    console.log(data.toString())
})