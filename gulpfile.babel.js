'use strict'

import gulp from 'gulp'
import requireDir from 'require-dir'
import sequence from 'gulp-sequence'

requireDir('./gulp/')

// Build EtherCSS
gulp.task('build', ['sass:default', 'sass:min'])

// Setup development environment
gulp.task('dev', sequence('build', 'server'))

// Test task for testing HTML, Sass and JavaScript
gulp.task('test', sequence('sass:test'))

// Start server and watch HTML, CSS and JavaScript files for changes
gulp.task('server', ['browser-sync'], () => {
  const browserSync = require('browser-sync')
  const reload = browserSync.reload

  gulp.watch('src/**/*.scss', ['build'], reload)
})

// Create default task (cmd: gulp)
gulp.task('default', ['dev'])
