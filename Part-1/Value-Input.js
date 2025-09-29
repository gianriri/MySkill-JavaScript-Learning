const prompt = require('prompt-sync')({sigint:true});

// Program penjumlahan
var num1 = prompt ('Enter a first number: ');
var num2 = prompt('Enter a second number: ');

var hasil = Number(num1) + Number(num2)

console.log('first number + second number = ');
console.log(hasil);