const { src, dest } = require("gulp");

//config
const path = require('../config/path');
const app = require('../config/app');


//plugins
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const pugs = require("gulp-pug");
const webpHtml = require("gulp-webp-html");

const pug = () => {
    return src(path.pug.src)
    .pipe(plumber( {
        errorHandler: notify.onError(error => ({
            title: 'HTML',
            message: error.message
        }))
    }))
    .pipe(pugs(app.pug))
    .pipe(webpHtml())
    .pipe(dest(path.pug.dest))
}

module.exports = pug;