const fs = require('fs');
const util = require('util');
const fs_readdir = util.promisify(fs.readdir);

(async() => {
  const archivos = await fs_readdir('.');
  for(let arch of archivos){
    console.log(arch);
}
})().catch(err => { console.error(err); });
