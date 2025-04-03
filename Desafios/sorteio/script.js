let names=["cami", "juh", "bren"];
let levels=[1,2,3,4,5,6,7,8,9,10];
let decisions=  names[Math.floor(Math.random()* names.length)];
let piso=[Math.floor(Math.random()*levels.length)];

console.log(decisions + " " + piso);
