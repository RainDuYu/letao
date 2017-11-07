//配置文件
require.config({
    baseUrl: '/public',
    paths: {
        jquery: 'assets/jquery/jquery.min',//用jquery代替这个路径下的jquery.min
        template:'assets/artTemplate/template-web',
        uploadify:'assets/uploadify/jquery.uploadify.min',
        nprogress:'assets/nprogress/nprogress',//网页进度条
        echarts:'assets/echarts/echarts.min',
        ckeditor:'assets/ckeditor/ckeditor'
    },
    //如果第三方的类库不支持AMD,
    // 通过shim可以实现类似模块的用法
    // shim是require.config的一个属性，
    // 专门用来配置不兼容的模块
    shim:{
        //模块有什么特点 
        //依赖其他模块,可以开放给其他模块
        uploadify:{
            //通过exports可以将非模块方法或属性实现向外开放
            //公开出来（相当于标准模块中return的作用）
            // exports:
            //2.通过deps可以依赖其他模块
            deps:['jquery']
        },
        ckeditor:{
            exports:'CKEDITOR'
        }    
    }
});
// AMD规范
//全局执行的模块
require(['jquery', 'nprogress'],function($,NProgress){
    NProgress.start();
    NProgress.done();
    //ajax请求时也需要进度显示(进度条)
    $(document).ajaxStart(function(){
        NProgress.start();
    }).ajaxStop(function(){
        NProgress.done();
    })
});
