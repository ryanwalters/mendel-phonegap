'use strict';

const babel = require('gulp-babel');
const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

const paths = {
    css: './www/sass/**/*.scss',
    dist: './www/dist',
    scripts: ['./www/app/**/_*.js', './www/app/**/*.js']
};

gulp.task('css', () => {
    return gulp.src(paths.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dist))
});

gulp.task('scripts', () => {
    return gulp.src(paths.scripts)
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', () => {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['css', 'scripts', 'watch']);