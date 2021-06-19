import express from 'express';
import router from "./route";
import path from "path";
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    escape:false,
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

//static src service middleware
app.use(express.static(path.join(__dirname,"public")));




app.use("/api",router);


app.listen(8080,()=>console.log('listening is 8080'));