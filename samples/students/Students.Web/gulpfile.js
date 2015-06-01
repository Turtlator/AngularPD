'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('scripts:html', function() {
    return gulp
        .src('src/app/**/*.html')
        .pipe($.plumber())
        //.pipe($.ngHtml2js({
        //    moduleName: 'app'
        //}))
        //.pipe($.concat('app.views.js'))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('scripts:css', ['scripts:html'], function() {
    return gulp
        .src('src/app/**/*.css')
        .pipe($.plumber())
        .pipe($.concat('app.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('scripts:js', ['scripts:html'], function() {
    return gulp
        .src('src/app/**/*.js')
        .pipe($.plumber())
        .pipe(gulp.dest('dist/app'));
});

gulp.task('html:copy', function() {
    return gulp
        .src('src/index.html')
        .pipe($.plumber())
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['scripts:js', 'html:copy']);