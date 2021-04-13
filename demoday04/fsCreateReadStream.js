const fs = require('fs');
const path = require('path');
const readStream = fs.createReadStream(path.join(__dirname,'test','tst.txt'));
let str = '';
let count = 0;

readStream.on('data',(chunk) => {
    str += chunk
    count++;
})

readStream.on('end',(chunk) => {
    console.log(str)
})

readStream.on('err',(chunk) =>{
    console.log(err)
})