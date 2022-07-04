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
    return src(path.html.src)
    .pipe(plumber( {
        errorHandler: notify.onError(error => ({
            title: 'HTML',
            message: error.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({
        title: "До сжатия"
    }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({
        title: "После сжатия"
    }))
    .pipe(dest(path.html.dest))
}

module.exports = html;