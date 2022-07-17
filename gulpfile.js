global.$ = {
    //package
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    browserSync:  require('browser-sync').create(),

    //config
    path:  require('./config/path'),
    app:  require('./config/app'),
}

//tasks require
const clear = require('./tasks/clear');
const pug = require('./tasks/pug');
const scss = require('./tasks/scss');
const js = require('./tasks/js');
const img = require('./tasks/img');
const font = require('./tasks/font');
const server = require('./tasks/server');
const deploy = require('./tasks/deploy');

//observer
const watcher = () => {
    $.gulp.watch($.path.pug.watch, pug).on('all', $.browserSync.reload);
    $.gulp.watch($.path.scss.watch, scss).on('all', $.browserSync.reload);
    $.gulp.watch($.path.js.watch, js).on('all', $.browserSync.reload);
    $.gulp.watch($.path.img.watch, img).on('all', $.browserSync.reload);
    $.gulp.watch($.path.font.watch, font).on('all', $.browserSync.reload);
}

//prod
const build = $.gulp.series(
    clear,
    $.gulp.parallel(pug, scss, js, img, font)
);

//develop
const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, server)
);

//tasks
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.deploy = deploy;

//build
exports.default = $.app.isProd
    ? build
    : dev;