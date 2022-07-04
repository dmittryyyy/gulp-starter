const { src, dest } = require("gulp");

//config
const path = require('../config/path');
const app = require("../config/app");

//plugins
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const cssImport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupMedaiQueries = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");

const css = () => {
    return src(path.css.src, { sourcemaps: app.isDev })
    .pipe(plumber( {
        errorHandler: notify.onError(error => ({
            title: 'CSS',
            message: error.message
        }))
    }))
    .pipe(concat('main.css'))
    .pipe(cssImport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupMedaiQueries())
    .pipe(size({
        title: 'До'
    }))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(csso())
    .pipe(size({
        title: 'После'
    }))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
}

module.exports = css;