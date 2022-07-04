const { src, dest } = require("gulp");

//config
const path = require('../config/path');
const app = require("../config/app");

//plugins
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupMedaiQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const webpCss = require("gulp-webp-css");

const scss = () => {
    return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(plumber( {
        errorHandler: notify.onError(error => ({
            title: 'SCSS',
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupMedaiQueries())
    .pipe(size({
        title: 'До'
    }))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: '.min'}))
    .pipe(csso())
    .pipe(size({
        title: 'После'
    }))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
}

module.exports = scss;