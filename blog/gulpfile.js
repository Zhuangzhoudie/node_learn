var gulp = require('gulp'),
	sassMin = require("gulp-sass"),
	imageMin = require("gulp-imagemin"),
	autoprefixer = require("gulp-autoprefixer"),
	cleanCss = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	uglify = require('gulp-uglify');
//sass编译
function scss() {
	return gulp.src('./src/public/css/**/*.scss')
		.pipe(sassMin())
		//浏览器前缀补全 处理兼容
		.pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
		//css压缩
		.pipe(cleanCss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/public/mincss'));
}
//js编译
function js() {
	// 1. 找到文件
	return gulp.src('./src/public/js/**/*.js')
		// 2. 压缩文件
		.pipe(uglify({
			mangle: false
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		// 3. 另存压缩后的文件
		.pipe(gulp.dest('./dist/public/minjs'))
}
//img压缩
function img() {
	return gulp.src('./src/public/img/**/*.{png,jpg,gif,ico}')
		.pipe(imageMin({
			progressive: true
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/public/minimg'))
}
//assets
function assets() {
	return gulp.src('./src/public/assets/**/*')
		.pipe(gulp.dest('./dist/public/assets'));
}

//默认任务代码
//gulp3是以下写法
//gulp.task('default',['sass','js','img']);
//gulp4是以下写法
//gulp.series：按照顺序执行
//gulp.parallel：可以并行计算
gulp.task('default', gulp.parallel(scss, js, img, assets));
