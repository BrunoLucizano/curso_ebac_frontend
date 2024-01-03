const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', function () {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('uglify', function (cb) {
  pump([
    gulp.src('src/js/*.js'),
    uglify(),
    gulp.dest('dist/js')
  ], cb);
});

gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/images/*', gulp.series('imagemin'));
  gulp.watch('src/js/*.js', gulp.series('uglify'));
});
