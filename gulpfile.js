var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');


// 默认任务
gulp.task('default', function(){
    gulp.run('babel', 'sass');
	gulp.watch('public/javascripts/*.js', function(){
        gulp.run('babel');
    });
	gulp.watch('public/stylesheets/*.scss', function(){
        gulp.run('sass');
    });
});

gulp.task('babel', function () {
    return gulp.src('public/javascripts/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/javascripts/dist'));
});

gulp.task('sass', function () {
    gulp.src('public/stylesheets/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets/dist'));
});