(function () {
  'use strict';

  var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  ngAnnotate = require('gulp-ng-annotate');

  gulp.task('js', function() {
    return gulp.src('./src/angular-mdl.js')
    .pipe( rename('angular-mdl.min.js') )
    .pipe( ngAnnotate() )
    .pipe( uglify() )
    .pipe( gulp.dest('./dist') );
  });

  gulp.task('watch', function() {
    gulp.watch('./src/angular-mdl.js', ['js']);
    return true;
  });

  gulp.task('default', ['js']);

})();
