//CH17 생성자 함수에 의한 객체생성

//Object 생성자 함수

//빈객체 생성
const person = new Object();

//프로퍼티 추가
person.name = 'Lee';
person.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
};

console.log(person); // {name: 'Lee', sayHello: f}
person.sayHello(); // Hi! My name is Lee

const strObj = new String('Lee'); //String
const numObj = new Number(123); //Number
const boolObj = new Boolean(true); //Boolean
const func = new Function('x', 'return x * x'); //Function
const arr = new Array(1, 2, 3); //Array 객체(배열)
const regExp = new RegExp(/ab+c/i); //정규표현식
const date = new Date();

console.log(typeof strObj, numObj,); //object
console.log(strObj, numObj);

console.log(typeof func); //function
console.log(func);

//객체 리터럴에 의한 생성
const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter());

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle2.getDiameter());