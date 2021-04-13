import express,{Application,Request,Response,NextFunction} from 'express';
const app:Application = express();
const port = process.env.PORT || 3000;

app.get('/',(req:Request,res:Response,next:NextFunction) => {
    const title :string = "hello node TS"
    res.json({
        title
    })
})



app.listen(port,()=>console.log('listening on port'));
