const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');

const options = {
	'scssFiles': './scss/*.scss',
	'cssDest': './css',
	'cssMinDest': './dist/css',
	'sassDevOptions': {
		outputStyle: 'expanded'
	},
	'sassProdOptions': {
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

gulp.task('images', (tmp) => {
	return gulp.src(['./imgs/**/*'])
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest('./dist/imgs/'));
});

gulp.task('watch', ['sassDev', 'images', 'serve'], () => {
	gulp.watch(options.scssFiles, ['sassDev']);
});

gulp.task('serve', () => {
	browserSync.init(['./css/**/'], {
		server: {
			baseDir: "./"
		}
	});
	gulp.watch(['*.html', '*.css', '*.scss']).on("change", reload);
});

gulp.task('default', () => {
	console.log('Gulp funcionando...');
});

