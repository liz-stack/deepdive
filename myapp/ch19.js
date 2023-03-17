//CH19 프로토타입

//이름과 주소 속성을 갖는 객체
/* const person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log(person); */

//객체는 데이터 와 행위의 집합
const circle = {
    radius: 5, //반지름
    getDiameter() { //원의 지름
        return 2 * this.radius;
    },
    getPerimeter() { //원의 둘레
        return 2 * Math.PI * this.radius;
    },
    getArea() { //원의 넓이
        return Math.PI * this.radius;
    }
};

console.log(circle);

console.log(circle.getDiameter); //[Function: getDiameter]
console.log(circle.getPerimeter); //[Function: getPerimeter]
console.log(circle.getArea); //[Function: getArea]

//상속과 프로토타입
//생성자함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius ** 2;
    };
}

// //반지름이 1인 인스턴스 생성
// const circle1 = new Circle(1);
// //반지름이 2인 인스턴스 생성
// const circle2 = new Circle(2);

//Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 
//getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
//getArea 메서드는 하나만 생성해 모든 인스턴스가 공유해서 사용하는 것이 바람직
console.log(circle1.getArea === circle2.getArea); //false


//중복제거
function Circle(radius) {
    this.radius = radius;
}

//Circle 생성자함수가 생성한 모든 인스턴스가 getArea 메서드를 
//공유해 사용할수 있도록 프로토타입에 추가한다. 
//프로토타입은 Circle 생성자함수의 prototype프로퍼티에 바인딩되어있다.
Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
};

//인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); //true


// __proto__는 접근자 프로퍼티다.

const obj = {};
//const parent = { x: 1 };

//getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;
//setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); //1


// __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.

const person = { name: 'Lee' };

//person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__')); //false

//__proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype 의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
/* { get: [Function: get __proto__], set: [Function: set __proto__],
  enumerable: false, configurable: true} */

//모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); //true


// 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유

const parent = {};
const child = {};

child.__proto__ = parent;
parent.__proto__ = child; //TypeError: Cyclic __proto__ value

//obj는 프로토타입 체인의 종점. 따라서 Object.__proto__를 상속받을 수 없다.
const obj = Object.create(null);

//obj는 Object.__proto__를 상속받을 수 없다.
console.log(obj.__proto__);

//-> __proto__ 보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj));

const obj = {};
const parent = { x: 1 };

Object.getPrototypeOf(obj); //obj.__proto__ , obj 객체의 프로토타입을 취득
Object.setPrototypeOf(obj); //obj.__proto__ = parent;

console.log(obj.x); //1



//함수객체의 prototype 프로퍼티

// 함수 객체만이 소유하는 prototype 프로퍼티는 
//생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.

//함수 객체는 프로토타입 프로퍼티 소유
(function () { }).hasOwnProperty('prototype'); //true

//일반 객체는 프로토타입 프로퍼티 무소유
({}).hasOwnProperty('propertype') //false

//1. 화살표 함수는 non-constructor
const Person = name => {
    this.name = name;
}

//non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype')); //false

//non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype); //undefined

//2. 메서드 축약 표현으로 정의한 메서드는 non-constructor이다.
const obj = {
    foo() { }
};

console.log(obj.foo.hasOwnProperty('prototype')); //false
console.log(obj.foo.prototype); //false


function Person(name) {
    this.name = name;
}

//const me = new Person(('Kook'));

//Person.protytope과 me.__proto__는 동일한 프로토타입을 가리키다.
console.log(Person.prototype === me.__proto__); //true


/* 프로토타입의 constructor 프로퍼티와 생성자함수 */

function Person(name) {
    this.name = name;
}

const you = new Person('Lee');

console.log(me.constructor === Person); //true


/* 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입 */

//obj 객체를 생성한 생성자 함수는 Object다
const obj = new Object();
console.log(obj.constructor === Object); //true

//add 함수 객체를 생성한 생성자 함수는 Function이다.
//const add = new Function('a', 'b', 'return a + b');
console.log(add.constructor === Function);

//생성자함수
function Person(name) {
    this.name = name;
}

//me 객체를 생성한 생성자 함수는 Person이다.
const me = new Person('Kook');


//객체 리터럴
const obj = {};

//함수 리터럴
const add = function (a, b) { return a + b };

//배열 리터럴
const arr = [1, 2, 3]

//정규 표현식 리터럴
const regexp = /is/ig;


//obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj = {};

// 하지만 obj 객체의 생성자 함수는 Object 생성자 함수이다.
console.log(obj.constructor === Object); //true