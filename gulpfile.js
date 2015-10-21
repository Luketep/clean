var
	gulp = require('gulp'),
	babel = require('gulp-babel'),
	clean = require('gulp-clean'),
	sourcemaps = require('gulp-sourcemaps'),
	paths = {
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

gulp.task('babel', function() {
	return gulp.src(paths.src.javascript)
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.target.javascript));
});

gulp.task('move-static', function() {
	return gulp.src(paths.src.static, { base: './src' })
		.pipe(gulp.dest(paths.targetFolder));
});

gulp.task('watch', ['move-static', 'babel'], function() {
	gulp.watch(paths.src.static, ['move-static']);
	gulp.watch(paths.src.javascript, ['babel']);
});
