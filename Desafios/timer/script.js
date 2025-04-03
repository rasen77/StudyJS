//setTimeout(() => {
  // for(let i =1;i<=3;i++){

    //console.log(i)
//} console.log("timer acabou!!")
    
//}, 3000);
let contador= 0;
let intervalo=setInterval(()=>{
    contador++;
    console.log(`Passaram-se ${contador}segundos.`)

    if(contador>=60){
        clearInterval(intervalo);let contador= 0;

        console.log("Timer parado após 60 execuções.");
    }
}, 60000); // 2000 milissegundos = 2 segundos