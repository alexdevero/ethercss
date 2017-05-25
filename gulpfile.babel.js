'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';
import sequence from 'gulp-sequence';

requireDir('./gulp/');

// Automate copying
gulp.task('copy:all', ['copy:css']);

// Automate SASS to CSS compilation
gulp.task('sass:all', ['sass:default', 'sass:min']);

// Builds the website
gulp.task('build', sequence('html', 'copy:all', 'sass', 'js'));

// Setup development environment
gulp.task('dev', sequence('build', 'server'));

// Test task for testing HTML, Sass and JavaScript
gulp.task('test', sequence('html:test', 'sass:test'));

// Start server and watch HTML, CSS and JavaScript files for changes
gulp.task('server', ['browser-sync'], () => {
  const browserSync = require('browser-sync');
  const reload = browserSync.reload;

  gulp.watch('src/*.html', ['html'], reload);
  gulp.watch('src/scss/**/*.scss', ['sass:all'], reload);
  gulp.watch('src/css/**/*.css', ['copy:css'], reload);
});

// Create default task (cmd: gulp)
gulp.task('default', ['dev']);
