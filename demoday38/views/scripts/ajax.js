$(function(){
    let getData = ()=>{
        $.ajax({
            url:'/books',
            type: 'GET',
            dataType: 'json',
            success(msg){
                //console.log(msg);
                let html = template('template',{
                    data:msg,
                })
                $('#tbody').html(html);
                editBook();
            },
            error(msg){
                console.log(msg);
            }
        })
    }
    //require data
    getData();

    //create an add pop up window
    $('#add').click(()=>{
        $('#myModal').modal('show');
        $('#form').find('input[name=name]').val(''); 
        $('#form').find('input[name=author]').val(''); 
        $('#form').find('input[name=category]').val(''); 
        $('#form').find('input[name=description]').val(''); 
        //create an ajax of adding book       
        $('#btn_submit').off('click').click(()=>{
            //gain data from form(ajax model)
            let data = $('#form').serialize();
            $.ajax({
                url:'/books/book',
                type:'POST',
                dataType:'json',
                data:data,
                success(msg){
                    //console.log(msg);
                    if(msg.code === 0){
                        getData();
                        toastr.success('submit successfully')
                    }else{
                        toastr.error('submit failed')
                    }   
                },
                error(msg){
                    toastr.error('submit failed')
                }
            })
            //close current pop up window
            $('#myModal').modal('hide');
        })
    })
    // edit and delete the data of books
    function editBook(){
        //edit
        $('.edit').on('click','a:eq(0)',function(){
            $('#myModal').modal('show');
            let id = $(this).parent().siblings().eq(0).text();
           
            $.ajax({
                //url:'/editpage?editid='+id,
                url:'/books/book/'+id,
                type:'get',
                dataType:'json',
                success(msg){
                    console.log(msg)
                    //fill in value into form
                    $('#form').find('input[name=name]').val(msg.data[0].name); 
                    $('#form').find('input[name=author]').val(msg.data[0].author); 
                    $('#form').find('input[name=category]').val(msg.data[0].category); 
                    $('#form').find('input[name=description]').val(msg.data[0].description); 
                    $('#btn_submit').off('click').click(function(){
                        let data = $('#form').serialize();
                        //name=Tinglong%20&author=Terry&category=IT&description=Fram&id=25
                        console.log(data);
                        $.ajax({
                            url:'/books/book',
                            type:'put',
                            data:`${data}&id=${id}`,
                            dataType:'json',
                            success(msg){
                                console.log(msg)
                                getData();
                                toastr.success('submit successfully')
                            },
                            error(msg){
                                console.log(msg)
                                toastr.success('submit failed')
                            }
                        })
                        $('#myModal').modal('hide')
                    })
                },
                error(msg){
                    console.log(msg)
                }
            })
        })
        //delete
        $('.edit').on('click','a:eq(1)',function(){
            let id = $(this).parent().siblings().eq(0).text();
            $.ajax({
                url:'/books/book/'+id,
                type:'delete',
                dataType:'json',
                success(msg){
                    console.log(msg)
                    getData();
                    toastr.success('delete successfully')
                },
                error(msg){
                    console.log(msg)
                    toastr.error('submit failed')
                }
            })
        })
    }


})