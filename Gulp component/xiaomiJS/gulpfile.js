/*
 gulp API
    1.gulp.task()
    语法:.task("任务名称",任务处理函数)
    作用:创建一个基于流的任务
    example: gulp.task("htmlHandler",()=>{
        找到html 源文件进行压缩打包,放入指定目录
    })
    2.gulp.src();
    =>语法:gulp.src("路径信息")
    =>作用:找到原文件
    =>书写方式
    2-1. gulp.src("./a/b.html") 找到指定目下的文件
    2-2. gulp.src("./a/*.html") 找到目录下所有的.html文件
    2-3. gulp.src("./a/**") 找到目录下的所有文件
    2-4. gulp.src("./a/** /*") 找到目下所有子目录里面的所有文件
    2-5. gulp.src("./a/** /*.html") 找到目录下所有子目录下的.html文件
    3.gulp.dest()
    =>语法: gulp.dest(路径信息)
    =>作用: 把一个内容放入指定目录下
    =>example: gulp.dest("./dest") 把打包内容放入abc目录下
    4.gulp.watch()
    =>语法:gulp.watch(路径信息,任务名称)
    =>作用:监控指定目录下的文件,一旦发生变化,从新执行后面的任务
    =>example:gulp.watch("./src/pages/*.html",htmlHandler)
    ->当指定目下的html文件发生变化,就会执行htmlHanlder这个任务
    5.gulp.series()
    =>语法:gulp.series(任务1,任务2,任务3)
    =>作用:逐个执行多个任务,当一个任务结束,第二个任务开始
    6.gulp.parallel()
    语法:gulp.parallel(任务1,任务2,任务3)
    =>作用:并行开始多个任务
    7. .pipe()
    =>管道函数
    =>所有的gulp API 都是基于流
    =>接受当前流,进入下一个流的管道函数
    => example: gulp.src().pipe(压缩任务).pipe(转码).pipe(gulp.dest("abc"))
    gulp插件
    1.gulp-cssmin 
    yarn add gulp-cssmin -D;
    const cssmin = require('gulp-cssmin');
    导入后获取css处理文件的函数

*/
//gulp3 书写语法
// const gulp = require('gulp');
// const path = require('path');
// const cssmin = require('gulp-cssmin');
// gulp.task("cssHandler",()=>{
//     //需要捕获到该任务的结束,需要把这个流return出去,
//     //task 就会处理流
//    return gulp.src(path.join(__dirname,"src","css","*.css"))
//     .pipe(cssmin())
//     .pipe(gulp.dest(path.join(__dirname,"dist","css")))
// })


//gulp4 书写语法
//需要把函数名导出
const gulp = require('gulp');
const path = require('path');
const cssmin = require('gulp-cssmin');

/*
gulp 插件
2.gulp-autoprefixer
=> yarn gulp-autoprefixer -D
=> const autoPrefixer = require("gulp-autoprefixer")
=> 导入以后得到一个处理流文件的函数
=> 直接再管道函数里面使用,需要传递参数
    ->{browsers:[要兼容的浏览器]}
*/

const autoPrefixer = require('gulp-autoprefixer');


const cssHandler = () => {
    return gulp.src(path.join(__dirname, "src", "css", "*.css"))
        //.pipe(autoPrefixer({browsers:["last 2 versions"]}))
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.join(__dirname, "dist", "css")))
}

/*
    sass转换的问题
    gulp 里面配置一个任务,也可以转换sass 文件
*/
const sassToCss = require("gulp-sass");

const sassHandler = () => {
    return gulp.src(path.join(__dirname, "src", "sass", "*.scss"))
        .pipe(sassToCss())
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.join(__dirname, "dist", "sass")))
}


/*
    4.gulp-uglify 
        =>把压缩js插件
        =>导入:const uglify = require("gulp-uglify");
        =>导入以后得到一个可以处理流文件的函数
        =>直接再管道函数使用就可以了
        =>注意:你不能写ES6语法,一旦有了ES6语法就会报错
    5.gulp-babel 
        =>专门进行es6 转 es5的插件
        =>gulp-babel 的版本
            -> gulp-babel@7: 大部分使用在gulp@3 里面
            -> gulp-babel@8: 大部分使用在gulp@4 里面
        =>下载:
            ->gulp-babel 依赖另外两个包
            ->@babel/core @babel/preset-env
        =>导入一个包就可以
            ->const babel = require('gulp-babel');
        =>导入以后得到一个可以处理流文件的函数
        =>直接再管道函数内
*/
const uglify = require("gulp-uglify");
const babel = require('gulp-babel');
const jsHandler = () => {
    return gulp.src(path.join(__dirname, "src", "js", "*.js"))
        /*
            如果是babel@7
            presets:['es2015']
        */
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(__dirname, "dist", "js")))
}



/*
    html 打包
    下载 npm i -D gulp-htmlmin
    导入:const htmlmin = require("gulp-htmlmin");
    导入以后得到一个可以处理流文件的函数
    直接在管道内调用,需要传递参数
*/
const htmlmin = require("gulp-htmlmin");
const fileInclude = require('gulp-file-include');
const htmlHandler = () => {
    return gulp.src(path.join(__dirname, 'src', 'pages', '*.html'))
        .pipe(fileInclude({//根据你的配置导入对应的html片段
            prefix:"@-@",//你自定义的一个标识符
            basepath:"./src/components",//基准目录,你的组件都在哪一个文件里面
        }))
        //通过配置参数进行压缩
        .pipe(htmlmin({
            collapseWhitespace: true,//移除空格 压缩
            removeEmptyAttributes: true,//移除空html class 属性 仅限于原生属性 <div class="">nothing</div> 会把class给移除
            collapseBooleanAttributes: true,//移除 checked boolean值属性
            removeAttributeQuotes: true,//移除属性上的双引号
            minifyCSS: true,//压缩内嵌式css 代码(只能基本压缩,不能添加前缀)
            minifyJS: true,//压缩内嵌js 只能基本压缩不能转码
            removeStyleLinkTypeAttributes: true,//移除 style 和 link 和 script标签上的type 属性
        }))
        .pipe(gulp.dest(path.join(__dirname, "dist","pages")))
}

/*
    打包图片
    在开发环境中 
    图片是不要来压缩的
    =>直接使用线上地址
    =>图片是UI处理好给我们的
    gulp-imagemin
    =>专门使用压缩图片(无损压缩),需要良好的网络环境
    压缩程度最高是7级
*/

const imgsHandler = () => {
    return gulp.src(path.join(__dirname, "src", "images", "**"))
        .pipe(gulp.dest(path.join(__dirname, "dist")))
}
const videosHandler = () => {
    return gulp.src(path.join(__dirname, "src", "videos", "**"))
        .pipe(gulp.dest(path.join(__dirname, "dist")))
}
const audiosHandler = () => {
    return gulp.src(path.join(__dirname, "src", "audios", "**"))
        .pipe(gulp.dest(path.join(__dirname, "dist")))
}
const libHandler = () => {
    return gulp.src(path.join(__dirname, "src", "lib", "**"))
        .pipe(gulp.dest(path.join(__dirname, "dist")))
}
const fontHandler = () => {
    return gulp.src(path.join(__dirname, "src", "fonts", "**"))
        .pipe(gulp.dest(path.join(__dirname, "dist")))
}

/*
    配置一个默认任务
    默认任务的作用就是把所有的任务给我一起执行了
    gulp.series 有先后顺序 一个结束下一个
    gulp.parallel 没有先后顺序 
    这个两个方法的返回值是一个函数,返回值可以直接被当作任务函数使用
    使用task的方式创建一个default任务
*/
//定义default 方法一:
// gulp.task('default',()=>{})
//定义default 方法二:
// module.exports.default = ()=>{}

/*
    del
    npm i -D del
    作用删除文件目录
    const del = require("del");
    导入后得到一个函数,直接使用传递参数就可以了
*/
const del = require("del");
//创建删除 dist 任务
const delHandler = ()=>{
    //del 直接执行就可以,不需要流
    //参数以数组形式传递的参数删除文件夹
    return del(['./dist'])
}


/*
    利用gulp 启动一个服务器
    gulp 是基于node环境的工具
    node 就是可以做服务器的语言
    gulp 可以启动一个基于node的服务器
    启动服务器,用哪个目录当作服务器目录--启动dist目录当做根目录
    dist 目录,是我们的目录结果
    如果你使用src目录当作根目录,sass文件怎么办
    启动服务器的时候,dist目录里面的对应的html文件
    e.g
    sass文件
    src/pages/login.html
    src/sass/login.scss;
    这里login.html中如何引入loign.scss; 直接在未打包前的html中直接引入dist打包后的../sass/login.css就可以
    将来src/pages/login.html 会把打包传递到 dist/pages/login.html
    将来src/sass/login.scss 会打包传递到dist/sass/login.css

    gulp-webserver
    =>作用:启动一个基于node书写的服务器
    =>npm i -D gulp-webserver
    =>导入:const webserver = require("gulp-webserver");
    =>导入以后得到一个处理流文件的函数
    =>我们需要在管道里面调用
*/
const gulpWebServer = require("gulp-webserver");
const webHandler = ()=>{
    return gulp.src(path.join(__dirname,"dist"))
    .pipe(gulpWebServer({
        host:"localhost",//可以配置自定义域名
        port:"27000",//端口号
        livereload:true,//当文件修改的时候自动刷新页面
        //自动刷新 因为你启动的是dist目录下的内容,你修改src下的内容,需要将src和dist链接起来
        //所以需要一个自动刷新的功能
        open:"/pages/login.html",//默认打开哪一个文件(从dist以后的目录开始书写就可以了)
        //添加代理
        proxies:[
            //每一个代理对象数据类型
            //注意:1.如果没有代理,不要谢空对象;2.如果你想使用代理,那么必须要是在gulp-webserver启动的服务器上运行页面
            {
                //代理表示符
                source:'/td',
                //代理目标
                target:"",
            },
        ]
    }))
}
//监控
const watchHandler = ()=>{
    //配置需要监视的任务
    gulp.watch("./src/css/*.css",cssHandler);
    gulp.watch("./src/sass/*.scss",sassHandler);
    gulp.watch("./src/pages/*.html",htmlHandler);
    gulp.watch("./src/js/*.js",jsHandler);
}



const res = gulp.series(
    delHandler,
    gulp.parallel(cssHandler,sassHandler,jsHandler,htmlHandler,imgsHandler,videosHandler,audiosHandler,libHandler,fontHandler),
    webHandler,
    watchHandler
)
module.exports.default = res;

// module.exports = {
//     cssHandler,
//     sassHandler,
//     jsHandler,
//     htmlHandler,
//     imgsHandler,
//     videosHandler,
//     audiosHandler,
//     libHandler,
//     fontHandler,
//     delHandler
// };

