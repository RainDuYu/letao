define(['jquery', 'template', 'ckeditor', './utils', 'uploadify'], function ($, template, CKEDITOR){
    CKEDITOR.replace('ck');
    //表单提交
    $('form').on('submit',function(){
        var _this=$(this);
        $.ajax({
            url:'/api/product/addProduct',
            type:'post',
            data:_this.serialize(),
            success:function(info){
                if(info.success){
                    location.href='/goods_list.php';
                }
            }
        })
        return false;
    })
    //jQuery一般使用规律是
    //$(DOM).插件方法（对象格式）
    $('#upfile').uploadify({
        buttonText:'',
        //控制可选区域的宽高
        width:120,
        height:120,
        fileObjName:'pic1',
        itemTemplate:'<span></span>',
        //使用flash
        swf:'/public/assets/uploadify/uploadify.swf',
        uploader:'/api/product/addProductPic',
        onUploadSuccess:function(file,data){
            var res=JSON.parse(data);
            $('.preview img').attr('src','http://localhost:3000' + res.picAddr);
            //将图片上传地址放到表单中等待提交
            $('input[name="pic"]').val(res.picAddr);
        }
    });
    //品牌列表
    $.ajax({
        url:'/api/category/querySecondCategoryPaging',
        type:'get',
        data:{page:1,pageSize:100},
        success:function(info){
            var html=template('brands',info);
            $('.brand').append(html);
        }
    })
})