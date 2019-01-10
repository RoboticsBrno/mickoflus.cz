var gulp = require('gulp');
var resizer = require('gulp-images-resizer');

gulp.task('img-preview', function() {
  return gulp.src(['img/**/*.jpg', 'img/**/*.png'])
      .pipe(resizer({
          width: 740,
          quality: 70
      }))
  .pipe(gulp.dest('preview/'));
});

gulp.task('build', gulp.series('img-preview'));


