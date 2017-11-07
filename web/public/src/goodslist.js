define(['jquery', 'template','./utils'], function ($, template) {
   //每页2
    var size=2;
    //正则表达式匹配页码
    var reg = /\?[a-z]+=(\d+)/;
    //处理请求参数
    var search=location.search||'';
    //判断取得页数，进行匹配查找
    var page=reg.exec(search)&&reg.exec(search)[1];
    //默认页码值是1
    page=page||1;
    $.ajax({
        url: '/api/product/queryProductDetailList',
        type:'get',
        data:{page:page,pageSize:size},
        success:function(info){
            // console.log(info);
            //info本身就是一个对象
            var total=info.total;//在info中有总条数total
            // console.log(info.total);
            //总页数
            // var pageLen=Math.ceil(total/size);
            var pageLen = Math.ceil(total / size);
            // console.log(pageLen);
            //调用模版引擎处理商品列表
            var html = template('tpl',info);
            // console.log(html);            
                 //调用模版引擎处理商品分页
            var pagehtml = template('page',{
                pageLen: pageLen,
                page:page
            })
            $('.goods').html(html);
            $('.pagination').html(pagehtml);
        }
    })
})