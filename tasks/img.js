const { src, dest } = require("gulp");

//config
const path = require('../config/path');
const app = require('../config/app');

//plugins
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpIf = require("gulp-if");

const img = () => {
    return src(path.img.src)
    .pipe(plumber( {
        errorHandler: notify.onError(error => ({
            title: 'Image',
            message: error.message
        }))
    }))
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.img.dest))
}

module.exports = img;