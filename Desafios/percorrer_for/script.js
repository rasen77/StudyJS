for(let i=1;i<=20;i++){
if (i % 3 == 0 && i % 5 == 0){
    console.log("buzzfizz")
      continue; 
  }
 
  else if(i % 3 == 0 ){
    console.log("fizz")
    continue; 
  } 
  else if(i % 5 == 0){
    console.log("buzz") 
    continue; 
 
  }else{
console.log(i)
  }

}