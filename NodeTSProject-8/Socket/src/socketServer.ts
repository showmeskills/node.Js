import express from 'express';
import path from 'path';
const app = express();
import http from "http";
const server = http.createServer(app);
import {Server} from "socket.io";
const io = new Server(server);


// app.get('/',cors ,(req, res) => {
// //   res.sendFile(__dirname + '/index.html');
//     res.send("hello");
// });

app.use(express.static(path.join(__dirname,"public")));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("receive",(args)=>{
      console.log(args)
    socket.broadcast.emit("message",args);
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});