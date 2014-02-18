var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gutil = require('gulp-util');

var livereloader = function () {
    gutil.log('[livereoload called]');
};
gulp.task('livereload', livereloader);

var linter = function() {
  gutil.log('[lint called]');
};
gulp.task('lint', linter);

var tester = function() {
  gutil.log('[test called]');
};
gulp.task('test', tester);

gulp.task('develop', function () {
    nodemon({
        script: 'index.js',
        options: '-e html,js -i ignored.js'
    }).on('restart', function(){
        gutil.log('[nodemon]', 'Restarted', gutil.colors.cyan('123'));
        livereloader();
    });
});
