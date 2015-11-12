'use strict';

var gulp = require('gulp');
var nightwatch = require('gulp-nightwatch');
var livereload = require('gulp-livereload');
var bs = require('browser-sync').create();
var gutil = require('gulp-util');

gulp.task('serve:test', function (callback) {
  bs.init({
    notify: false,
    port: 9100,
    open: false,
    server: { baseDir: ['htdocs'] },
    snippetOptions: { blacklist: ['/'] },
    ui: false
  }, function() {
  });
});

gulp.task('nightwatch', function () {

  var target = gutil.env.env || "default";

  return gulp.src('').pipe(nightwatch({
    configFile: 'nightwatch.json',
    cliArgs: {
      env: target,
    }
  }));
});

gulp.task('test',['serve:test','nightwatch']);

gulp.task('watch', function(){
  gulp.watch("test/specs/*", ['test']);
});


