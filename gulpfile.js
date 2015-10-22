/* Copyright 2015 BlackBerry Ltd.

 Licensed under the Apache License, Version 2.0 (the 'License');
 you may not use this file except in compliance with the License.

 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an 'AS IS' BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied. See the License for the specific language
 governing permissions and limitations under the License.  */

var concat = require('gulp-concat');
var dirSync = require('gulp-directory-sync');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var gutil = require('gulp-util');
var wwatch = require('gulp-watch');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');


// paths to files, used for 'watch'
var paths = {
  sass: ['./src/**/*.scss'],
  underscore: ['./node_modes/underscore/underscore-min.js']
};


// 'gulp'
gulp.task('default', ['lint', 'compress', 'sass', 'sync-static', 'sync-views']);

gulp.task('sync-underscore', function() {
  gulp.src('node_modes/underscore/underscore-min.js').pipe(gulp.dest('www/lib/underscore/'));
});


// 'gulp lint'
gulp.task('lint', function() {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format('stylish', process.stderr));
});


// 'gulp compress'
gulp.task('compress', function() {
  return gulp.src(['./src/app.js', './src/views/**/*.js', './src/services/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('./www/js/'));
});


// 'gulp sass'
gulp.task('sass', function(done) {
  gulp.src('./src/styles/app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});


// 'gulp sync-static'
gulp.task('sync-static', function() {
  return gulp.src('')
    .pipe(dirSync('./src/static', './www/', 'nodelete', {
      printSummary: true
    }))
    .on('error', gutil.log);
});


// 'gulp sync-views'
gulp.task('sync-views', function() {
  return gulp.src('')
    .pipe(dirSync('./src/views', './www/views', 'nodelete', {
      printSummary: true
    }))
    .on('error', gutil.log);
});


// watch these files for changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.underscore, ['sync-underscore']);
});
