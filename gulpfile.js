var gulp = require('gulp');
  var sass = require('gulp-sass')(require('sass'));

gulp.task('minifySass',function () {
    return gulp.src('./src/styles/main/main.scss',{allowEmpty: true})
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./src/styles/main/'))
});

gulp.task('watchSass',function () {
    gulp.watch('./src/**/**/*.scss',gulp.series('minifySass'))
});
