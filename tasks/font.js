const { src, dest } = require("gulp");

//config
const path = require('../config/path');
const app = require('../config/app');

//plugins
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2Woff2 = require("gulp-ttf2woff2");
const gulpIf = require("gulp-if");

const font = () => {
    return src(path.font.src)
    .pipe(plumber( {
        errorHandler: notify.onError(error => ({
            title: 'Image',
            message: error.message
        }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(gulpIf(app.isProd, fonter(app.fonter)))
    .pipe(gulpIf(app.isProd, ttf2Woff2()))
    .pipe(dest(path.font.dest))
}

module.exports = font;