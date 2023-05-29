// console.log("Testing from 2 source file");

var concatenate = 20+30+"30"; // First compiler 
console.log(concatenate);  

var concatenate2 = "10"+20+30;
console.log(concatenate2);


var tt = +("20" + "30" + "40") + +"120" + "230";
console.log(tt);
console.log(typeof tt);

var tts = -('20'+'30'+'50')-('30'-'30'+60);
console.log(tts);