const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'taobao.html'),(err,data)=>{
    let dom = new JSDOM(data.toString());
    //去拿资源
   let document = dom.window.document;

   let promo = document.querySelector('promo-bd');

   let mod = promo.querySelectorAll('.mod');
   let arr = [];
   Array.from(mod).forEach(item =>{
       console.log(item)
       let img = item.querySelector('a img');
       arr.push({
           url:'https:'+item.querySelector('a').getAttribute('href'),
           img:img ? 'https:'+ img.getAttribute(href):null,
       })
   })
   fs.writeFile(path.join(__dirname,'taobao_data_json.json'),JSON.stringify(arr),err=>{

   })
})
