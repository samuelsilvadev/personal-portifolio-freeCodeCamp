const gulp = require('gulp');
const sass = require('gulp-sass');

const scssFiles = './scss/style.scss';
const cssDest = './css';

const sassDevOptions = {
  outputStyle: 'expanded'
}

const sassProdOptions = {
  outputStyle: 'compressed'
}

gulp.task('sassDev', () => {
    return gulp.src(scssFiles)
        .pipe(sass(sassDevOptions))
        .pipe(gulp.dest(cssDest));
});

gulp.task('sassProd', () => {
    return gulp.src(scssFiles)
        .pipe(sass(sassProdOptions))
        .pipe(gulp.dest(cssDest));
});

gulp.task('default', () => {
  console.log('Gulp funcionando...');
});

