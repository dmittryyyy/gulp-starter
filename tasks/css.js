//plugins
const groupMedaiQueries = require("gulp-group-css-media-queries");

const css = () => {
    return $.gulp.src($.path.css.src, { sourcemaps: $.app.isDev })
    .pipe($.gp.plumber( {
        errorHandler: $.gp.notify.onError(error => ({
            title: 'CSS',
            message: error.message
        }))
    }))
    .pipe($.gp.concat('main.css'))
    .pipe($.gp.cssimport())
    .pipe($.gp.webpCss())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.shorthand())
    .pipe(groupMedaiQueries())
    .pipe($.gp.size({
        title: 'До'
    }))
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
    .pipe($.gp.rename({ suffix: '.min'}))
    .pipe($.gp.csso())
    .pipe($.gp.size({
        title: 'После'
    }))
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream())
}

module.exports = css;