const prompt = require('prompt-sync')({sigint: true});

const nilai = prompt('Masukan nilai: ');
var grade;
switch(true){
    case nilai > 90:
        grade = "A";
        break;
    case nilai > 80:
        grade = "B+";
        break;
    case nilai > 70:
        grade = "B";
        break;
    case nilai > 60:
        grade = "C";
        break;
    default:
        grade = "D";
}
console.log("Grade anda adalah " + grade)