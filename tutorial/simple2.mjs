// # by: RETBOT 
var contador = 0;
export function siguiente() { return ++contador; }
function cuadrado() { return Math.pow(contador, 2); }
export function hola(){
	return "Hola mundo!";
}

export default function(){ return contador; }
export const valor = 42;
export let nocontar = -1;
export { cuadrado };
// # by: RETBOT 
