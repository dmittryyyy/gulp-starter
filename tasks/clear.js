const del = require("del");

//delete public
const clear = () => {
    return del($.path.root)
}

module.exports = clear;