import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from "./route";
const app = express();

app.use(cors({origin:true}));
app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs');
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

app.use("/api",routes);


app.listen(8000,()=>console.log('listening on port'));