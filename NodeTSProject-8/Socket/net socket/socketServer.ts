// import net,{Socket} from 'net';

// const server = net.createServer((socket:Socket) => {
//     //往客户端写数据
//     socket.write("hello");
//     socket.on("data",(chunk)=>{
//         console.log(chunk.toString());
//     })
//     //socket.end();

// })

// server.on("error",(err)=>{
//     throw err;
// })

// server.listen("9527",()=>{
//     console.log('opened server on',server.address());
// })

import net from 'net';
const server:any = new net.Server();

let clients:any = {};
let clientName = 0;

server.on('connection',(client:any)=>{
    client.name = ++clientName;
    clients[client.name] = client;

    client.on("data",(msg:any)=>{
        broadcast(client,msg.toString())
        console.log("客户端传来信息:"+`mame:${client.name}:`+msg);
    })
    client.on("error",(e:any)=>{
        console.log("client error",e)
        client.end();
    })
    client.on('close',()=>{
        delete clients[client.name]
        console.log(client.name+"下线了")
    })
})

function broadcast(client:any,msg:any){
    for(var key in clients){
      clients[key].write(client.name+"说:"+msg)
    }
}
server.listen(9527,()=>console.log("ok"))


