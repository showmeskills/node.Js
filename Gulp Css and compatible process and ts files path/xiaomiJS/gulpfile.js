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
       return gulp.src(path.join(__dirname,"src","css","*.css"))
        //.pipe(autoPrefixer({browsers:["last 2 versions"]}))
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.join(__dirname,"dist","css")))
}



module.exports={
    cssHandler
};

