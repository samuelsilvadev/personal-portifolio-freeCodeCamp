const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

const scssFiles = './scss/style.scss';
const cssDest = './css';
const cssMinDest = './dist/css';

const sassDevOptions = {
  outputStyle: 'expanded'
}

const sassProdOptions = {
  outputStyle: 'compressed'
}

gulp.task('sassDev', () => {
    return gulp.src(scssFiles)
        .pipe(sass(sassDevOptions).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('sassProd', () => {
    return gulp.src(scssFiles)
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(cssMinDest));
});

gulp.task('default', () => {
  console.log('Gulp funcionando...');
});

