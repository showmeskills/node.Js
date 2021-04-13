$('#reg').click(function(){
    return new Promise((resolve, reject) =>{
        $.ajax({
            url:'/reg',
            method: 'POST',
            dataType: 'json',
            data:{
                name:$('#name').val(),
                pass:$('#pass').val(),
            },
            success(value){
                resolve(value)
            },
            error(reason){
                reject(reason)
            }
        })
    })
    .then(value =>{  
            alert(value.message);
    },reason=>{
            alert(reason.message);
    })
})

$('#login').click(()=>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            url:'/login',
            method:'POST',
            dataType:'json',
            data:{name:$('#name').val(),pass:$('#pass').val()},
            success(msg){
               resolve(msg)
            },
            error(err){
                reject(err)
            }
        })
    })

    .then(value=>{
        alert(value.message);
    },reason=>{
        alert(reason.message)
    })
    
})