$.ajax({
    url:"/api/list",
    success(result){
        let templateStr = `
            <ul>
                {{each data}}
                    <li>{{$value}}</li>
                {{/each}}
            </ul>  
            <div>
                {{x}}
            </div>
        `
        let html = template.render(templateStr,{
            data:result.data,
            x:"hellow"
        })
         $("#list").html(html)

        // let html = `<ul>`;
        // result.data.map((val,idx)=>{
        //     html+=`<li>${val}</li>`
        // })
        // html+="</ul>"
        
        // $("#list").html(html)
       
    }
})