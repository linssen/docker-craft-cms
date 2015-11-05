'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
});


gulp.task('build_scripts', function() {
  return gulp.src([
      './scripts/vendor/jquery.js',
      './scripts/lib/*.js',
      './scripts/*.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./build/scripts'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('scripts:watch', function () {
  gulp.watch('./scripts/**/*.js', ['build_scripts']);
});

gulp.task('default', [
    'sass', 'build_scripts', 'sass:watch', 'scripts:watch'
]);
