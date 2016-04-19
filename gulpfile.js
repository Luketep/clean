var gulp = require('gulp');
var browserify = require('browserify');
var babelify= require('babelify');
var util = require('gulp-util');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var paths = {
	src: {
		static: [
			'src/index.html',
			'src/templates/**',
			'src/css/**',
			'src/js/libs/**',
			'src/resources/**'
		],
		javascript: [
			'!src/js/libs/**',
			'src/js/**/*.js'
		],
	},
	targetFolder: 'target',
	target: {
		static: [
			'index.html',
			'src/templates/**/*.html',
			'src/css/**/*.css',
			'src/js/libs/',
			'src/resources/'
		],
		javascript: 'target/js'
	}
};

gulp.task('clean', function(){
	return gulp.src(paths.targetFolder, {read:false})
		.pipe(clean());
});

gulp.task('build', function() {
	return browserify('./src/js/app.js', { debug: true })
		.transform(babelify, {
			presets: ['stage-0', 'es2015']
		})
		.bundle()
		.on('error', util.log.bind(util, 'Browserify Error'))
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify({ mangle: false }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./target/js'));
});

gulp.task('move-static', function() {
	return gulp.src(paths.src.static, { base: './src' })
		.pipe(gulp.dest(paths.targetFolder));
});

gulp.task('watch', ['move-static', 'build'], function() {
	gulp.watch(paths.src.static, ['move-static']);
	gulp.watch(paths.src.javascript, ['build']);
});

gulp.task('default', ['move-static', 'build']);