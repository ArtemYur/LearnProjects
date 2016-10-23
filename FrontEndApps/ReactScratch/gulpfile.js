﻿/// <binding BeforeBuild='copyLibs' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('copyLibs', function () {
    gulp.src('./node_modules/redux-undo/lib/index.js').pipe(gulp.dest('./Scripts/Libs/redux-undo'));
});