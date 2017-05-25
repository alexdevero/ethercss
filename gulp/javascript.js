'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

// Concatenate JavaScript files
gulp.task('js:concat', function() {
  const concat = require('gulp-concat');

  return gulp.src('./src/js/main.js')
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('./dist/js/'));
});

// Minify JavaScript files
gulp.task('js', () => {
  // const babel = require('gulp-babel');
  const browserSync = require('browser-sync');
  const changed = require('gulp-changed');
  const moduleConfig = {
    entry: './src/js/main.js',
    output: {
      filename: 'main.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
      ],
    }
  }
  const rename = require('gulp-rename');
  const uglify = require('gulp-uglify');

  return gulp.src('./src/js/main.js')
    .pipe(plumber())
    .pipe(changed('./dist/js'))
    //.pipe(babel()) // Using babel-loader through webpack
    .pipe(webpackStream(moduleConfig, webpack))
    .pipe(uglify().on('error', (e) => {
      console.log(e + '\r\n There\'s something wrong with the JavaScript file(s).')
    }))
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream({
      match: '**/*.js'
    }));
});

gulp.task('js:test', () => {
  const eslint = require('gulp-eslint');

  console.log('Running JavaScript lint test');

  return gulp.src('./src/js/main.js')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});
