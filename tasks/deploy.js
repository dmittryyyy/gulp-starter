const ghPages = require("gulp-gh-pages");

const deploy = () => {
    return $.gulp.src($.path.deploy)
    .pipe(ghPages());
}

module.exports = deploy;