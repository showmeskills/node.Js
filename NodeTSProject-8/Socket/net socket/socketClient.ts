// import net from "net";

// const client = net.connect({port:9527},()=>{
//     console.log("connected to server!");
//     client.write("world!\r\n");
// })

// client.on("data",(data)=>{
//     console.log(data.toString());
//     // client.end();
// })

// client.on("end",()=>{
//     console.log("disconnected from server!");
// })

import net from "net";
const readline = require('readline');

const port = 9527;

const host = "127.0.0.1";

const socket:any = new net.Socket();

socket.setEncoding = "UTF-8";
//链接后端 端口
socket.connect(port,host,()=>{
    console.log("connected to server!");
    socket.write("hello");
})
//收到window窗口输入的信息
socket.on("data",(msg:any)=>{
    console.log("====>",msg.toString());
    say()
})

socket.on("error",(err:any)=>{
    console.log("error"+err)
})
socket.on("close",()=>{
    console.log("connection closed!");
})
//调用readline 方法
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

function say(){
    rl.question("请输入:\n",(inputMsg:string)=>{
        if(inputMsg !== 'bye'){
            socket.write(inputMsg + "\n")
        }else{
            socket.destroy()
            rl.close()
        }
    })
}

