define(['jquery'],function($){
    $.ajax({
        // http://localhost:3000/employee/employeeLogin
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function (info) {
            if (info.error) {
                location.href = '/login.html';
            }
        }
    })
    $('.logout').on('click',function(){
        $.ajax({
            url:'/api/employee/employeeLogout',
            type:'get',
            success:function(info){
                if(info.success){
                    location.href='/login.html';
                }
            }
        })
    })
    // 选择器'+'紧邻的下一个元素
    $('.navs a + ul').prev().on('click',function(){
        $(this).next().slideToggle();
    })
})