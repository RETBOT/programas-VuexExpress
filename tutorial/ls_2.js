// # by: RETBOT 
const { Resolver } = require('dns');
const fs = require('fs');
const util = require('util');

/*const fs_readdir = util.promisify(fs.readdir);

(async() => {
	const archivos  = await fs_readdir('.');
	for(let arch of archivos){
	console.log(arch);
}
})().catch(err => { console.error(err); });
*/// # by: RETBOT 

const fs_readdir = dir => {
	return new Promise((resolve, reject) => { fs.readdir(dir, (err, Archivos) => {
		if(ezrr) reject(err);
		else resolve(Archivos);
	});
});
};// # by: RETBOT 
