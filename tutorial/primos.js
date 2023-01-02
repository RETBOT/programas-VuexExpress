var numPrimo = 0;
// # by: RETBOT 
if(process.argv[2]) numPrimo = process.argv[2];

if(!isNaN(numPrimo) && numPrimo != 0){

  for(var i=0; i<25; i++){
    if(numPrimo%2==0){
       console.log("Primo = "+numPrimo);
    }
    numPrimo++;
  }
}else{
   numPrimo = Math.floor(Math.random()*1000)+1;
  console.log("Numero Aleatorio:  "+numPrimo);
   for(var i=0; i<25; i++){
       if(numPrimo%2!=0){
          console.log("Primo = "+numPrimo);
       }
    numPrimo++;
  }
}

// # by: RETBOT 
