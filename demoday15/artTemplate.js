const template = require('art-template');
const http = require('http');
const path = require('path');

http.createServer((req,res) => {

    if(req.url === '/favicon.ico') {
        res.end();
        return;
    }
    //template(File,data)
    let html = template(path.join(__dirname,'view','demo.art'),{
        title:'hello Art-template'
    })
    //template.compile(source,options)
    let art = `
        <ul>
            {{each arr}}
                <li>{{$index}}----{{$value}}</li>
            {{/each}}
        </ul>
    `
    let render = template.compile(art);
    let html1 = render({
        arr:['this','is','a','method','of','compile'],
    })
    //template.render(source,data{},options)
    let art1 = `
            <ul>
                {{each user}}
                    <li>{{$index}}----{{$value}}</li>
                {{/each}}
            </ul>
            `
    let html2 = template.render(art1,{
        user:{
            name:'Terry',
            age:100,
            job:'web',
        }
    })

    res.write(html)
    res.write(html1)
    
    res.end(html2)
    
   
}).listen(8080,()=>{
    console.log('Running')
})