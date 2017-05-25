'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';

// Minify HTML files
gulp.task('html', () => {
  const browserSync = require('browser-sync');
  const changed = require('gulp-changed');
  const htmlmin = require('gulp-htmlmin');

  return gulp.src('./src/*.html')
    .pipe(plumber())
    .pipe(changed('./dist'))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream({
      match: '**/*.html'
    }));
});

// Hint HTML files
gulp.task('html:test', () => {
  const htmlhint = require('gulp-htmlhint');

  console.log('Running HTML lint test');

  return gulp.src('src/*.html')
    .pipe(plumber())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter({
      suppress: false
    }));
});
