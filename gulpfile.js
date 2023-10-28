
const gulp = require('gulp')
const sass= require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
//css
function styles(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

//imagemin
function images(){
    return gulp.src('./src/imagens/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

//exportação imagemin e compressao do sass
exports.default = gulp.parallel(styles, images)


//watch
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}