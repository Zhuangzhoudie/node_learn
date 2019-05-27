const gulp = require('gulp');
const babel = require('gulp-babel');
const sassMin = require("gulp-sass");
const imageMin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const watch = require("gulp-watch");
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
		.pipe(babel({
                presets: ['es2015'] // es5检查机制
            }))
		// 2. 压缩文件
		.pipe(uglify())
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
gulp.task('dev', function() {
	gulp.watch('./src/public/js/**/*.js', gulp.series(js));
	gulp.watch('./src/public/css/**/*.scss', gulp.series(scss));
	gulp.watch('./src/public/img/**/*.{png,jpg,gif,ico}', gulp.series(img));

})
