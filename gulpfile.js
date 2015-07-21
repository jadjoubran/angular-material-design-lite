(function (){
    'use strict';

    var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        ngAnnotate = require('gulp-ng-annotate'),
        sourcemaps = require('gulp-sourcemaps');

    gulp.task('js', function (){
        return gulp.src('./src/angular-material-design-lite.js')
            .pipe(gulp.dest('./dist'))
            .pipe(rename('angular-material-design-lite.min.js'))
            .pipe(sourcemaps.init())
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist'))
            .pipe(gulp.dest('./documentation/js'));
    });

    gulp.task('watch', function (){
        gulp.watch('./src/angular-material-design-lite.js', ['js']);
        return true;
    });

    gulp.task('default', ['js']);

})();
