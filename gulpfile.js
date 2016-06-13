// Gulpfile for EtherCSS
// author Alex Devero

'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    util = require('gulp-util');

// Sass to CSS

gulp.task('sass', function() {
  return sass('src/ethercss.scss', {sourcemap: true})
    .on('error', sass.logError)
    .pipe(csslint('csslintrc.json'))
    .pipe(csslint.reporter())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(gulp.dest('dist'))
});

// Sass to CSS minified

gulp.task('sassMin', function() {
  return sass('src/ethercss.scss', {noCache: true, sourcemap: true, style: 'compressed'})
    .on('error', sass.logError)
    .pipe(csslint('csslintrc.json'))
    .pipe(csslint.reporter())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(gulp.dest('dist'))
});

// Build EtherCSS

gulp.task('build', ['sass', 'sassMin']);
