'use strict'

import gulp from 'gulp'

import browserSync from 'browser-sync'
import csscomb from 'gulp-csscomb'
import cssnano from 'cssnano'
import cssnext from 'postcss-cssnext'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'

const dirs = {
  src: './src/ethercss.scss',
  dest: './dist'
}

const processorsDev = [
  cssnext({
    browsers: [
      'Chrome >= 45',
      'Firefox >= 35',
      'ie >= 9',
      'last 5 versions',
      'Safari >= 7'
    ]
  })
]

const processorsProd = [
  cssnext({
    browsers: [
      'Chrome >= 45',
      'Firefox >= 35',
      'ie >= 9',
      'last 5 versions',
      'Safari >= 7'
    ]
  }),
  cssnano({
    autoprefixer: false
  })
]

// Compile Sass to CSS - default
gulp.task('sass:default', () => {
  return gulp.src(dirs.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested'
    }).on('error', (e) => {
      console.log(e + '\r\n There\'s something wrong with the Sass file(s).')
    }))
    .pipe(csscomb())
    .pipe(postcss(processorsDev))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dirs.dest))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))
})

// Compile Sass to CSS - minified
gulp.task('sass:min', () => {
  return gulp.src(dirs.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', (e) => {
      console.log(e + '\r\n There\'s something wrong with minified Sass file(s).')
    }))
    .pipe(csscomb())
    .pipe(postcss(processorsProd))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dirs.dest))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))
})

gulp.task('sass:test', () => {
  const sassLint = require('gulp-sass-lint')

  console.log('Running Sass lint test')

  return gulp.src('./src/**/*.scss')
    .pipe(plumber())
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})
