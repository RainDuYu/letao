define(['jquery','template'],function($,template){
    $.ajax({
        url:'/api/user/queryUser',
        type:'get',
        data:{page:1,pageSize:10},
        success:function(info){
            var html=template('list',info);
            $('tbody').html(html);
        }
    })
    //事件添加不上可以使用事件委托
    // btn委托给table
    $('table').on('click','.btn',function(){
        var _this=$(this);
        var td=$(this).parent();
        var id=td.attr('data-id');
        var status=td.attr('data-status');
        //0和1之间切换
        status=Math.abs(status-1);
        $.ajax({
            url:'/api/user/updateUser',
            type:'post',
            data: { id: id, isDelete: status},
            success:function(info){
                if(status==1){
                    _this.text('启用');           
                    td.prev().text('是');    
                    _this.toggleClass('btn-info btn-warning');
                }else{
                    _this.text('禁用');
                    td.prev().text('否');    
                    _this.toggleClass('btn-warning btn-info');
                }
                td.attr('data-status', status);
            }
        })
    })
})