/**
 * Created by zyg on 16/5/11.
 */
var path = require('path');
var fs = require('fs');

var concat = require('gulp-concat');
var clean = require('gulp-clean');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var gulp = require('gulp');

gulp.task('clean',()=>{
  return gulp.src('./dist/').pipe(clean());
});

gulp.task('build',['clean'],()=>{

  gulp.src([
    path.resolve(__dirname,'./lib/jquery-ui.css'),
    path.resolve(__dirname,'./src/jquery-ui-timepicker-addon.css'),
    path.resolve(__dirname,'./src/jquery-ui-timepicker-addon-cover.css'),
  ]).pipe(concat('jquery-date-time-picker.css'))
    .pipe(gulp.dest('./dist/'));

  gulp.src([
    path.resolve(__dirname,'./lib/jquery-ui.js'),
    path.resolve(__dirname,'./src/jquery-ui-timepicker-addon.js'),
    path.resolve(__dirname,'./src/i18n/jquery-ui-timepicker-zh-CN.js'),
    path.resolve(__dirname,'./src/i18n/datepicker-zh-CN.js'),
  ]).pipe(concat('jquery-date-time-picker.js'))
    .pipe(gulp.dest('./dist/'));

});

gulp.task('product',()=>{
  gulp.src([
    path.resolve(__dirname,'./lib/jquery-ui.css'),
    path.resolve(__dirname,'./src/jquery-ui-timepicker-addon.css'),
    path.resolve(__dirname,'./src/jquery-ui-timepicker-addon-cover.css'),
  ]).pipe(concat('jquery-date-time-picker.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/'));

  gulp.src([
    path.resolve(__dirname,'./lib/jquery-ui.js'),
    path.resolve(__dirname,'./src/jquery-ui-timepicker-addon.js'),
    path.resolve(__dirname,'./src/i18n/jquery-ui-timepicker-zh-CN.js'),
    path.resolve(__dirname,'./src/i18n/datepicker-zh-CN.js'),
  ]).pipe(concat('jquery-date-time-picker.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));

});