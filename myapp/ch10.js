
//객체 리터럴

var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
};

console.log(typeof person);
console.log(person);

//프로퍼티
var person = {
    name: 'Lee', // 키 name : 값 'Lee'
    age: 20 //키 age : 값 20
};

var person = {
    firstName: 'Liz',
    'last-Name': 'Lee'
}
console.log(person);