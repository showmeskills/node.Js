const request = require('./request');
const fs = require('fs');
const path = require('path');

(async () =>{
    try{
        let {statusCode,headers,body} = await request(`https://world.taobao.com/`);
        fs.writeFile(path.join(__dirname,'index.html'),body,err=>{
            if(err){
                console.log(err,`write has an error`);
                return
            }
            console.log(`write has been successful`)
        })
    }catch(e){
        console.log(e,'https has an error')
    }

})()