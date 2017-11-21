const del = require('del');
const gulp = require('gulp');
const concat = require('gulp-concat');
const browserify = require('browserify');
const babelify = require('babelify');
const util = require('gulp-util');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

const baseSourcePath = './src';
const paths = {
	src: {
		static: [
			`${baseSourcePath}/index.html`,
			`${baseSourcePath}/resources/**`
		],
		javascript: [
			`${baseSourcePath}/js/**/*.js`
		],
		stylus: [
			`${baseSourcePath}/css/**`
		]
	},
	targetFolder: 'target',
	target: {
		static: [
			'index.html',
			`${baseSourcePath}/resources/`
		],
		javascript: 'target/js',
		stylus: 'target/css'
	}
};

process.env.NODE_ENV = 'production';

gulp.task('clean', () => {
	return del(paths.targetFolder).then(paths => {
		console.log('Deleted files and folders:\n', paths.join('\n'));
	});
});

gulp.task('build', () => {
	return browserify(`${baseSourcePath}/js/main.js`, {
			debug: true
		})
		.transform(babelify, {})
		.bundle()
		.on('error', util.log.bind(util, 'Browserify Error'))
		.pipe(source('build.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(uglify({
			mangle: false
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./target/js'));
});

gulp.task('move-static', () => {
	return gulp.src(paths.src.static, {
			base: baseSourcePath
		})
		.pipe(gulp.dest(paths.targetFolder));
});

gulp.task('stylus', () => {
	return gulp.src(paths.src.stylus)
		.pipe(sourcemaps.init())
		.pipe(stylus({
			compress: true
		}))
		.pipe(concat('bundle.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.target.stylus));
});

gulp.task('watch', ['move-static', 'build', 'stylus'], () => {
	gulp.watch(paths.src.static, ['move-static']);
	gulp.watch(paths.src.javascript, ['build']);
	gulp.watch(paths.src.javascript, ['stylus']);
});

gulp.task('default', ['move-static', 'build', 'stylus']);