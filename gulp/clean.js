'use strict';

import gulp from 'gulp';

// Clean dist
gulp.task('clean', () => {
  const del = require('del')

  console.log('Clean \'dist\' folder')

  return gulp.src('dist')
    .pipe(del())
})
