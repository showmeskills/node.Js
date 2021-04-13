const fs = require('fs');
const path = require('path');
fs.writeFile(path.join(__dirname,'writestream.txt'),'this is a new file',(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('file has been written')
})
const writeStream = fs.createWriteStream(path.join(__dirname,'writestream.txt'))
let data = 'this is extra information\n'
// add content to file
for(var i = 0; i < 99; i++){
    writeStream.write(data,'utf-8') 
}

writeStream.end();
writeStream.on('finish',()=>{
    console.log('the extra content has been written into current file')
})
writeStream.on('err',()=>{
    console.log(err);
})