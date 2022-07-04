const del = require("del");

//config
const path = require('../config/path');

//delete public
const clear = () => {
    return del(path.root)
}

module.exports = clear;