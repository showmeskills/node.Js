import express from 'express';
import router from "./route";
import bodyParser from 'body-parser';
const port = 8000;
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())


app.use('/',router)

app.listen(port,()=>console.log(port+"is listening"));

