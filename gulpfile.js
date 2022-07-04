const { watch, series, parallel } = require("gulp");
const browserSync = require('browser-sync').create();

//config
const path = require('./config/path');
const app = require('./config/app');

//tasks require
const clear = require('./tasks/clear');
const pug = require('./tasks/pug');
const scss = require('./tasks/scss');
const js = require('./tasks/js');
const img = require('./tasks/img');
const font = require('./tasks/font');

//server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

//observer
const watcher = () => {
    watch(path.pug.watch, pug).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.font.watch, font).on('all', browserSync.reload);
}

//prod
const build = series(
    clear,
    parallel(pug, scss, js, img, font)
);

//develop
const dev = series(
    build,
    parallel(watcher, server)
)

//tasks
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;

//build
exports.default = app.isProd
    ? build
    : dev;