const { src, dest } = require("gulp");

//config
const path = require('../config/path');
const app = require('../config/app');

//plugins
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webpackStream = require("webpack-stream");

const js = () => {
    return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(plumber( {
        errorHandler: notify.onError(error => ({
            title: 'JavaScript',
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpackStream(app.webpack))
    .pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
}

module.exports = js;