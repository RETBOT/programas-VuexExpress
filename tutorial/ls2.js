const fs = require('fs');
const util = require('util');
const fs_readdir = util.promisify(fs.readdir);

(async () => {
 var dir = '.';
 if(process.argv[2]) dir = process.argv[2];
 const archivos = await fs_readdir(dir);
for(let arch of archivos){
 console.log(arch);
}
})().catch(err => { console.error(err); });
