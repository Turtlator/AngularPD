'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var app = 'src/';

var paths = {
    html: app + 'app/**/*.html',
    js: app + 'app/**/*.js',
    css: app + 'app/**/*.css',
    main: 'index.html',
    output: 'dist/'
};

gulp.task('scripts:html', function() {
    return gulp
        .src(paths.html)
        .pipe($.plumber())
        .pipe($.ngHtml2js({
            moduleName: 'app'
        }))
        .pipe($.concat('app.views.js'))
        .pipe(gulp.dest(paths.output + 'app'));
});

gulp.task('scripts:css', ['scripts:html'], function() {
    return gulp
        .src(paths.css)
        .pipe($.plumber())
        .pipe($.concat('app.css'))
        .pipe(gulp.dest(paths.output));
});

gulp.task('scripts:js', ['scripts:html'], function() {
    return gulp
        .src(paths.js)
        .pipe($.plumber())

        .pipe(gulp.dest(paths.output + 'app'));
});

gulp.task('html:copy', function() {
    return gulp
        .src(paths.main)
        .pipe($.plumber())
        .pipe(gulp.dest(paths.output));
});

gulp.task('build', ['scripts:js', 'html:copy']);