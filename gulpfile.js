var gulp = require('gulp');
var sass = require("gulp-sass");
var server = require("gulp-webserver");
var uglify = require("gulp-uglify");
// 压缩css
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8080,
            open: true
        }))
})
gulp.task("sass", function() {
    gulp.src("./src/scss/*.css")
        .pipe(sass())
        .pipe(gulp.dest("./bulid/css"));
});
gulp.task("minjs", function() {
    gulp.src("./src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("/bulid/js"))
});
gulp.task("minhtml", function() {
    gulp.src("./src/*.html")
        .pipe(gulp.dest("bulid"))
})