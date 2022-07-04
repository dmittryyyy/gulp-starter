const { src, dest } = require("gulp");

//config
const path = require('../config/path');
const app = require('../config/app');

//plugins
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const webpHtml = require("gulp-webp-html");

const html = () => {
    return $.gulp.src($.path.html.src)
    .pipe($.gp.plumber( {
        errorHandler: $.gp.notify.onError(error => ({
            title: 'HTML',
            message: error.message
        }))
    }))
    .pipe($.gp.fileInclude())
    .pipe($.gp.webpHtml())
    .pipe($.gp.size({
        title: "До сжатия"
    }))
    .pipe($.gp.htmlmin($.app.htmlmin))
    .pipe($.gp.size({
        title: "После сжатия"
    }))
    .pipe($.gulp.dest($.path.html.dest))
}

module.exports = html;