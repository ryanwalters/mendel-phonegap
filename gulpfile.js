'use strict';

const babel = require('gulp-babel');
const concat = require('gulp-concat');
const gulp = require('gulp');
const uglify = require('gulp-uglify');

const paths = {
    scripts: './www/app/**/*.js'
};

gulp.task('scripts', () => {
    return gulp.src(paths.scripts)
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./www/dist'));
});

gulp.task('watch', () => {
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);