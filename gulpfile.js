
const gulp = require('gulp')
const sass= require('gulp-sass')(require('sass'))
//css
function styles(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}
exports.default = styles


//watch
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}