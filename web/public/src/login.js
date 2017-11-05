define(['jquery'],function($){
    //提交表单
    $('form').on('submit', function () {
        //缓存外部的this
        var _this = $(this);
        $.ajax({
            //api就相当于http://localhost:3000
            url: '/api/employee/employeeLogin',
            //请求方式为post
            type: 'post',
            //序列化
            data: _this.serialize(),
            success: function (info) {
                //失败
                if (info.error) {
                    return alert(info.message);
                }
                //成功后跳转到根目录
                location.href = '/';
            }
        })
        return false;//去除表单默认提交
    })
})