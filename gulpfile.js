const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', () => {
  return gulp.src('./app/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist/css'))
});
 
gulp.task('watch', () => {
    gulp.watch('./app/**/*.scss', gulp.series('sass'))
});