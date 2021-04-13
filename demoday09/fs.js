//is there a file of css in the server, if there is not a css file, and then create a new css file in the server.
const fs = require('fs');
const path = require('path');

fs.stat(path.join(__dirname,'css'),(err,stat) => {
    if(err){
        console.log('there is not css file');
        //create a css file in the server
        fs.mkdir(path.join(__dirname,'css'),(err) => {
            if(err){
                console.log('create is failed');
            }else{
                console.log('the css file is created');
            }
        })
    }else{
        console.log('the css file is existed');
        console.log(stat.isDirectory())
        console.log(stat.isFile())
    }
})
//Function recursion; if the html file is existed to import its all files
let filesArr = [];
fs.readdir(path.join(__dirname,'html'),(err,data)=>{
    if(err){
        console.log('there is not html file');
    }else{
        console.log('the html file is existed');
        (function getFiles(i){
           
            if(i === data.length){
                console.log(filesArr)
                return false; 
            }
            fs.stat('html/'+data[i],(err,stat)=>{
                
                if(stat.isFile()){
                    filesArr.push(data[i]);
                }
                getFiles(i+1)
            })
        })(0);
    }
})