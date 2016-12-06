var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var concatCss = require('gulp-concat-css');



const PATH_JS =  './src/js/**/*.js';


gulp.task('script', function () {
    runSequence(['custom-script', 'vendor-script'],'concat-script');
});

gulp.task('watch-script', function () {
    runSequence('custom-script','concat-script');
});

gulp.task('custom-script', function () {
    return gulp.src(PATH_JS)
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(concat('custom.js'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./temp/js'));
});

gulp.task('vendor-script', function () {
    return gulp.src(
        [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/angular/angular.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./temp/js'));
});

gulp.task('concat-script', function () {
    return gulp.src(
        [
            './temp/js/vendor.js',
            './temp/js/custom.js'
        ])
        .pipe(sourcemaps.init({'loadMaps': true}))
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./public/js'));
});


gulp.task('css', function () {
    return gulp.src(
        [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ])
        .pipe(concatCss("style.css"), {rebaseUrls: false})
        .pipe(gulp.dest('./public/css'));
});


gulp.task('watch', ['default'], function () {
    gulp.watch([PATH_JS], ['watch-script']);
});

gulp.task('default', ['script', 'css']);
