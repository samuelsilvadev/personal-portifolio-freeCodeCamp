const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

const options = {
  'scssFiles'   : './scss/style.scss',
  'cssDest'     : './css',
  'cssMinDest'  : './dist/css',
  'sassDevOptions' : {
    outputStyle: 'expanded'
  },
 'sassProdOptions' : {
    outputStyle: 'compressed'
  }
};

gulp.task('sassDev', () => {
    return gulp.src(options.scssFiles)
        .pipe(sass(options.sassDevOptions).on('error', sass.logError))
        .pipe(gulp.dest(options.cssDest));
});

gulp.task('sassProd', () => {
    return gulp.src(options.scssFiles)
        .pipe(sass(options.sassProdOptions).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(options.cssMinDest));
});

gulp.task('watch', ['sassDev', 'serve'], () => {
    gulp.watch(options.scssFiles,['sassDev']);
});

gulp.task('serve', function () {
  browserSync.init(['./css/**/'], {
    server: {
      baseDir: "./"
    }
  });
  gulp.watch(['*.html','*.css']).on("change", reload);
});

gulp.task('default', () => {
  console.log('Gulp funcionando...');
});

