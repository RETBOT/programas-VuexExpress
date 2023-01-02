// Si no recibe ningun parametro, debe notificar al usuario como debe 
// notificar al usuario como debe usar el script 

// variables para la entrada de datos 
var num1 = 0;
var num2 = 0;
// Lectura de los datos 
if(process.argv[2]) num1 = process.argv[2];
if(process.argv[3]) num2 = process.argv[3];

// Si escribe un valor 
if(num1 != ' '){
// Si el num1 es un número y el num2 no contiene información 
if(!isNaN(num1) && num2 == 0){
// Escribe en consola la tabla de multiplicar del número ingresado
   console.log("Tabla de multiplicar de : "+num1);
   for(var i=1; i<=10; i++){
      console.log(num1+"x"+i+"="+(num1*i));
   }
}else if(!isNaN(num1) && !isNaN(num2)){
   // Si num2 es mayor a num1 
    if(num1 > num2){ // hace el intercambio
  	var aux = num1; // el num1 se guarda  en aux
	num1 = num2; // se cambia num1 con num2 
	num2 = aux; // num2 se cambia por lo que tenia num1
    }
   // Escribe en consola desde cual numero inicia y terminan las tablas de multiplicar 
    console.log("Tablas de multiplicar desde : "+num1+" hasta el "+num2);
   // ciclo para las tablas de multiplicar 
    for(var i=num1; i<=num2; i++){
	console.log("Tabla del :"+i);
	// ciclo para la tabla de multiplicar actual
	for(var j=1; j<=10; j++){
	   console.log(i+"x"+j+"="+(i*j));
	}
    }
}else{ // si no ingresa un numero valido
  console.log("Ingresar un numero!!!!! ಠ_ಠ");
}

}else{// Si no, se notifica al usuario como usar el script
 console.log("Tablas de multiplicar:");
 console.log("Opcion 1: ingresar un numero para mostrar su tabla de multiplicar.");
 console.log("Opcion 2: ingresar dos numeros para mostrar las tablas de multiplicar de todos los numeros dentro de ese rango (de menor a mayor)");
}

