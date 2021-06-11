import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import tsify from "tsify";

const paths = {
    pages:["src/pages/*.html"],
}
//找到html文件，打包后放入把html文件放入dist中
const copyHtml = ()=> gulp.src(paths.pages).pipe(gulp.dest('dist'));

const htmlHandler = gulp.parallel(copyHtml,()=>{
    return browserify({
        basedir:".",
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))//设置打包后的文件名
    .pipe(gulp.dest('dist'))//打包口的文件夹名
})

export {
    htmlHandler
}
