var mobil = ["Avanza","Yaris","Alya"];

//Mengambil elemen pertama pada array
console.log(mobil[0])
console.log(mobil[1])

//Mengisi element array dengan push
var mobil = ["Avanza","Yaris","Alya"];

mobil.push("Veloz")

console.log(mobil)

//Membuat array kosong
var arrayKosong = [];

//Mencetak semua element array
var mobil = ["Avanza","Yaris","Alya","Veloz"];

for(let i = 0; i < mobil.length; i++){
    console.log('Cetak mobil ke- ' + i + ": " + mobil[i]);
}