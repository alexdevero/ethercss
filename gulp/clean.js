'use strict';

import gulp from 'gulp';

// Clean dist
gulp.task('clean', () => {
  const clean = require('gulp-clean');

  console.log('Clean \'dist\' folder');

  return gulp.src('dist', {
    read: false
  })
    .pipe(clean());
});
