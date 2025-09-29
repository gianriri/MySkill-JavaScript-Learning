//Properti
var car = {
    type : "Fiat",
    model : "500",
    color : "White",


//Method
start: function(){
    console.log("Ini method start");
},
drive: function(){
    console.log("Ini method drive");
},
brake: function(){
    console.log("Ini method drive");
},
stop: function(){
    console.log("Ini method stop");
}
};

console.log(car.type);
console.log(car.color);

car.start();
car.drive();

function Person(firstName, lastName){
    //properti
    this.firstName = firstName;
    this.lastName = lastName;

    //method
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.showName = function(){
        console.log(this.fullName());
    }
}

var person1 = new Person("Muhar", "Tony");
var person2 = new Person("Petani", "Kode");

person1.showName();
person2.showName();