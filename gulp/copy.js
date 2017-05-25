'use strict';

import gulp from 'gulp';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';

// Copy CSS files
gulp.task('copy:css', () => {
  return gulp.src('./src/css/*')
    .pipe(plumber())
    .pipe(changed('./dist/css'))
    .pipe(gulp.dest('./dist/css'));
});
