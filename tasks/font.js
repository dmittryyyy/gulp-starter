const gulpIf = require("gulp-if");

const font = () => {
    return $.gulp.src($.path.font.src)
    .pipe($.gp.plumber( {
        errorHandler: $.gp.notify.onError(error => ({
            title: 'Image',
            message: error.message
        }))
    }))
    .pipe($.gp.newer($.path.font.dest))
    .pipe(gulpIf($.app.isProd, $.gp.fonter($.app.fonter)))
    .pipe(gulpIf($.app.isProd, $.gp.ttf2woff2()))
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.browserSync.stream())
}

module.exports = font;