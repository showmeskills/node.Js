import express from 'express';
import cors from "cors";
import path from "path";
import router from "./route/users";
import { mongoURL } from "./config/dbKey"
import mongoose from "mongoose";
import cookieSession from "cookie-session"
import http from "http";
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});


//set up cookieSession
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

mongoose.connect(
    mongoURL,
    { useNewUrlParser: true }
)
    .then(_ => console.log("db connected"))
    .catch(_ => console.log("db disconnected"))




app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');




//set up router
app.use('/api', router)


io.on("connection", (socket) => {
   socket.emit("message",4)
})

server.listen(5000, () => { console.log('listening') })