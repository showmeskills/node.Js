const path = require('path');
const fs = require('fs');
const content = 'this is a demo in test file'
fs.writeFile(path.join(__dirname,'test.txt'),content,(err,data) => {

    if(err){
        console.log('the file is not created')
    }else{
        fn(function(recived){
            console.log(recived.toString());
        })
    }


    function fn(callback){
        fs.readFile(path.join(__dirname,'test.txt'),(err,data)=>{
            if(err){
                console.log('read file error')
            }
            callback(data);
        })
    }
})
