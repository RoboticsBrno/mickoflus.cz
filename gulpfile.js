var gulp = require('gulp');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));
var ftp = require('vinyl-ftp');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));
var resizer = require('gulp-images-resizer');

gulp.task('deploy', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: args.server,
    user: args.user,
    password: args.password,
    log: gulp.log
  });
  gulp.src(['*.html', './img/**', 'preview/**', 'css/*.css', 'fonts/*', 'js/*.js', 'favicon.ico'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});

gulp.task('img-preview', function() {
  return gulp.src('img/**/*.*')
      .pipe(resizer({
          format: "jpg",
          width: "30%",
          quality: 70
      }))
  .pipe(gulp.dest('preview/'));
});

gulp.task('build', ['img-preview'], function() {
});


