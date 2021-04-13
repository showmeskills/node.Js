const fs = require('fs');
const path = require('path');
fs.mkdir(path.join(__dirname, 'test'),(err) => {
    if(err){ 
        console.log('err');
        return false;
    }
    console.log('create the directory is successful')
})

fs.stat(path.join(__dirname),(err, stats) => {
    if(err){
        console.log('err')
        return false;
    }
    console.log(`${stats.isDirectory()}`)
    console.log(`${stats.isFile()}`)
})

fs.writeFile(path.join(__dirname,'test','tst.txt'),'this is the content of tst',(err)=>{
    if(err){
        console.log('err')
        return false;
    }
    console.log('create the file is successful')
})

fs.appendFile(path.join(__dirname,'test','tst2.txt'),'this is the content of tst2',(err)=>{
    if(err){
        console.log('err');
        return false;
    }
    console.log('create the file is successful')
})

fs.readFile(path.join(__dirname,'test','tst.txt'),(err,data)=>{
    if(err){
        console.log('err');
        return false;
    }
    console.log(data.toString())
})

fs.readdir(path.join(__dirname,'test'),(err,data)=>{
    if(err){
        console.log('err');
        return false;
    }
    console.log(data)
})
//rename the first
    fs.rename(path.join(__dirname,'test','tst3.txt'),'changedNameTst.txt',(err)=>{
        if(err){
            console.log('err');
            return false;
        }
        console.log('rename is succeed');
    })
//rename the second
fs.rename(path.join(__dirname,'test','changedNameTst.txt'),path.join(__dirname,'test','movedChangedName.txt'),(err)=>{
    if(err){
        console.log('err');
        return false;
    }
    console.log('move is succeed');
})

fs.mkdir(path.join(__dirname,'test2'),(err)=>{
    console.log('test2 File is created successfully')
    fs.rmdir(path.join(__dirname,'test2'),(err)=>{
        if(err){
            console.log('err');
            return false;
        }
        console.log('test2 is removed successfully')
    })
})

fs.unlink(path.join(__dirname,'changedNameTst.txt'),(err)=>{
    if(err){
        console.log('err');
        return false;
    }
    console.log('changedNameTst has been removed successfully')
})
