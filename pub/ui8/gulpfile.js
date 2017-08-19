'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('hi', () => {
    console.log('task: hi');
});



gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))    
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});
    
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});


//import gulp from 'gulp';
//import babelify from ‘babelify’;
//import browserify from 'browserify';
//import source from 'vinyl-source-stream';
//import buffer from 'vinyl-buffer';
//
//gulp.task('scripts', () => {
//  //browserify(['myEntryPoint.js', 'myModule.js'])
//  browserify(['myEntryPoint.js', 'myModule.js'])
//  .transform(babelify)
//  .bundle()
//  .pipe(source('bundle.js')
//  .pipe(gulp.dest('dist/scripts'))
//  .pipe(buffer())     // You need this if you want to continue using the stream with other plugins
//});
