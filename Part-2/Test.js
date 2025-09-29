function sayHello(){
    console.log("Ini Multi Hello!");
}
function sayBukanHello(){
    console.log("Ini bukan Multi Hello!");
}
//Memanggil fungsi
sayHello()

//Multi hello
function sayMultiHello(){
    for(i = 0; i < 5; i++){
        sayBukanHello()
    }
}

sayMultiHello()