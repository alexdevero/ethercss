'use strict';

import gulp from 'gulp';

import browserSync from 'browser-sync';
import csscomb from 'gulp-csscomb';
import cssnano from 'cssnano';
import cssnext from 'postcss-cssnext';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const processors = [
  cssnext({
    browsers: ['last 5 versions', 'ie >= 9']
  }),
  cssnano({
    autoprefixer: false
  })
];

// Sass to CSS
gulp.task('sass:default', () => {
  return gulp.src('./src/scss/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested'
    }).on('error', (e) => {
      console.log(e + '\r\n There\'s something wrong with the Sass file(s).')
    }))
    .pipe(csscomb())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }));
});

// Sass to CSS - minified
gulp.task('sass:min', () => {
  return gulp.src('./src/scss/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', (e) => {
      console.log(e + '\r\n There\'s something wrong with minified Sass file(s).')
    }))
    .pipe(csscomb())
    .pipe(postcss(processors))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }));
});

gulp.task('sass:test', () => {
  const sassLint = require('gulp-sass-lint');

  console.log('Running Sass lint test');

  return gulp.src('./src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});
