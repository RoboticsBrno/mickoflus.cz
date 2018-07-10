var gulp = require('gulp');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));
var ftp = require('vinyl-ftp');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: args.server,
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  gulp.src(['*.html', './img/**', 'css/*.css', 'fonts/*', 'js/*.js', 'favicon.ico'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});

gulp.task('build', function() {


});
