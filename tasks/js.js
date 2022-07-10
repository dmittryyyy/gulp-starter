const webpackStream = require("webpack-stream");
let uglify = require('gulp-uglify-es').default;

const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
    .pipe($.gp.plumber( {
        errorHandler: $.gp.notify.onError(error => ({
            title: 'JavaScript',
            message: error.message
        }))
    }))
    .pipe($.gp.babel())
    .pipe(webpackStream($.app.webpack))
    .pipe($.gp.concat('main.js'))
    .pipe(uglify())
    .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
}

module.exports = js;