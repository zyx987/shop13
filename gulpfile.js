/**
 * Created by Rene Ulrich on 27.10.2015.
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var insert = require('gulp-insert');

gulp.task('sass', function () {

    // extract user name:
    var homeDir, osUserName, date, dateString;
    if (process.platform === 'win32') {
        homeDir = process.env.USERPROFILE;
        osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
    }
    else {
        homeDir = process.env.HOME || process.env.HOMEPATH;
        osUserName = homeDir && homeDir.split('/').pop() || 'root';
    }
    date = new Date();
    dateString = date.toLocaleDateString('de-CH') + ' ' + date.toLocaleTimeString('de-CH');

    gulp.src('./views/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(insert.prepend('/* Compiled: ' + osUserName + ' | ' +
            dateString + ' */\n\n'))
        .pipe(gulp.dest('./views/styles'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./views/styles/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
