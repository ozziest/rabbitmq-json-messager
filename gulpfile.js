var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

gulp.task('lint', function() {
    return gulp.src(['./src/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('test', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .pipe(eslint.failOnError());
});

gulp.task('default', ['test', 'lint']);

gulp.task('watch', function () {
  gulp.watch([
    'test/*.js',
    'src/*.js',
  ], ['default']);
});
