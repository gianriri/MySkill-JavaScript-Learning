//Funsgi dengan cara Biasa
function namaFungsi(){
    console.log("Hello World!");
}

//Fungsi dengan Ekspresi
var namaFungsi = function(){
    console.log("Hello World!");
}

//Fungsi dengan Tanda Panah
var namaFungsi = () => {
    console.log("Hello World");
}
//atau seperti ini (jika ini fungsi hanya satu baris):
var namaFungsi = () => console.log("Hello World");

//Funsgi dengan konstruktor
var namaFungsi = new Function('console.log("Hello World!");');



///// Eksekusi Fungsi /////

//Cara memanggil atau eksekusi fungsi
function sayHello(){
    console.log("Hello World!");
}
function sayMultiHello(){
    console.log("Ini Multi Hello World!");
}
//Memanggil fungsi
sayHello()

//Multi hello
function sayBanyakHello(){
    for(i = 0; i < 5; i++){
        sayMultiHello()
    }
}
sayBanyakHello()


//Fungsi dengan parameter
function kali(a, b){
    hasilKali = a * b;
    console.log("Hasil kali a x b = " + hasilKali);
}
kali(3, 4);

function sayMultiHallo(iter){
    for(i = 0; i < iter; i++){
        sayHello()
    }
}
sayMultiHallo(2)



///// Return /////

//Fungsi yang mengembalikan nilai
function bagi(a,b){
    hasilBagi = a / b;
    return hasilBagi;
}

//Memanggil fungsi
var nilai1 = 20;
var nilai2 = 5;
var hasilPembagian = bagi(nilai1, nilai2);

console.log(hasilPembagian);