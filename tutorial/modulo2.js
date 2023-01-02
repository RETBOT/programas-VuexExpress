// # by: RETBOT 
const util = require('util');
const A = "Un valor diferente de A";
const B = "Un valor diferente de B"; // # by: RETBOT 
const m1 = require('./modulo1.js');
console.log(`A=${A} B=${B} valores=${util.inspect(m1.valores())}`);
console.log(`${m1.A} ${m1.B}`)
const vals = m1.valores();
vals.B = "Algo completamente diferente";
console.log(util.inspect(vals));
console.log(util.inspect(m1.valores()));
// # by: RETBOT 
