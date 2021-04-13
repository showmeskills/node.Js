

const http = require('http');


let server = http.createServer();
server.on('request',(request,response) => {
  
    response.write('hello node_js');

    
    response.end('this is the first to learn nodejs');
});


server.listen(8080,'127.0.5.1',()=>{
    console.log('server is running')
})