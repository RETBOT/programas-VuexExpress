'use strict';
// # by: RETBOT 
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fs = require('fs');
const util = require('util');
//const fs_readdir = util.promisify(fs.readdir);
const fs_readdir = dir => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, Archivos) => {
            if (err) reject(err);else resolve(Archivos);
        });
    });
};

_asyncToGenerator(function* () {
    var dir = '.';
    if (process.argv[2]) dir = process.argv[2];
    const archivos = yield fs_readdir(dir);
    for (let arch of archivos) {
        console.log(arch);
    }
})().catch(err => {
    console.error(err);
});
// # by: RETBOT 
