const browserify = require('browserify')
const gulp = require('gulp')
const fs = require('fs')
gulp.task('compileES6', () => {
    browserify('index.js')
    .transform('babelify', {presets : ['react', 'es2015']})
    .bundle()
    .pipe(fs.createWriteStream('bundle.js'))
})
