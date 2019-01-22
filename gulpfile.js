const gulp = require('gulp');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const map = require('map-stream');

//
const exitOnJSLintingError = map(function (file, cb) {
  // return directly if it has success true
  if (file.jshint.success) {
    return cb(null, file);
  }

  // scan for each result object to detect if any error object has got actual Error?
  file.jshint.results.forEach(result => {
    // if code starts with `E` it's an error
    if (result.error && result.error.code[0] === 'E') {
      console.error('JSHint has caught error.');
      // exit the process immediately
      process.exit(1);
    }
  });

  // all good.. move further.
  cb(null, file);
});

// JavaScript task
gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    //.pipe(jshint.reporter('fail'))
    .pipe(exitOnJSLintingError)
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

// CSS task
gulp.task('css', () => {
  return gulp.src('./src/css/*.css')
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('build', (callback) => {
  runSequence('css', 'js', (err) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null);
  });
});

gulp.task('default', ['build']);
//added git ignore
