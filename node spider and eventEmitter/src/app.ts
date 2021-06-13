import EventEmitter from "events";
class MyEventEmitter extends EventEmitter{
}
const event = new MyEventEmitter();


event.emit("play","wo cao ni ma bi")

event.on("play",(value:string)=>{
    console.log(value);
})

