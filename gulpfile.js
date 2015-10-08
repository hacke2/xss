var gulp = require('gulp');
var babel = require('gulp-babel');


// 默认任务
gulp.task('default', function(){
	gulp.watch('public/javascripts/*.js', function(){
        gulp.run('babel');
    });
});

gulp.task('babel', function () {
    return gulp.src('public/javascripts/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/javascripts/dist'));
});