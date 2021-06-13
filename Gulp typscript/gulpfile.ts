import gulp from 'gulp';
import browserify from 'browserify';
import source from "vinyl-source-stream";
import watchify from 'watchify';
import tsify from 'tsify';
import gutil from "gulp-util";
import uglify from "gulp-uglify";
import sourcemaps from "gulp-sourcemaps";
import buffer from "vinyl-buffer";

const paths = {
    pages:["src/pages/*.html"],
}

const watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify
        .transform('babelify', {
            presets: ['env'],
            extensions: ['.ts']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist"));
}

gulp.task("default", gulp.parallel('copy-html', bundle));
watchedBrowserify.on("update", bundle);