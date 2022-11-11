const {src, dest, parallel} = require('gulp');
const babel = require('gulp-babel');

function copyCss() {
    return src('./src/**/*.css')
        .pipe(dest('build'));
}

function copyJs() {
    return src('./src/**/*.js')
        .pipe(babel())
        .pipe(dest('build'));
}

function copyHtml() {
    return src('./src/**/*.html')
        .pipe(dest('build'));
}

exports.default = parallel(copyHtml, copyCss, copyJs);
