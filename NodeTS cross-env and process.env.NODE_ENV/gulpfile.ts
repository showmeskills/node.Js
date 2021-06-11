import gulp from 'gulp';
import ts from "gulp-typescript";
const tsProject = ts.createProject("tsconfig.json")

const node_env = process.env.NODE_ENV
console.log(node_env);
if (node_env === "production") {
    gulp.task("default", () => {
        return tsProject.src()
            .pipe(tsProject())
            .js.pipe(gulp.dest("dist"));
    })
}

if (node_env === "development") {
    gulp.task("default", () => {
        return tsProject.src()
            .pipe(tsProject())
            .js.pipe(gulp.dest("dist"));
    })
}

