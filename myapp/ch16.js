//CH16 프로퍼티 어트리뷰트

//내부 슬롯
const o = {};

//o.[[Prototype]]

//브라우저에서는 나오지만 node환경에서는 실행 안됨
o.__proto__  //->Object.prototype


//프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
const person = {
  name: 'Lee'
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
//{ value: 'Lee', writable: true, enumerable: true, configurable: true }
//Object.getOwnPropertyDescriptor(객체의 참조, '프로퍼티키') 형태

//프로퍼티 동적생성
person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));
/* 
  name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
*/


//접근자 프로퍼티
const person = {
  firstName: 'Liz',
  lastName: 'Kook',

  //fullName은 접근자 함수로 구성된 접근자 프로퍼티
  //getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  //setter함수
  set fullName(name) {
    //배열 디스트럭처링 할당 참고...
    [this.firstName, this.lastName] = name.split(' ');
  }
};

//데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(person.firstName + ' ' + person.lastName); //Liz Kook

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
person.fullName = 'Heegun Lee';
console.log(person); //{ firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.fullName); //Heegun Lee


//접근자 프로퍼티와 데이터 프로퍼티를 구별하는 방법

//읿반 객체의 __proto__ 는 접근자 프로퍼티이다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

//함수 객체의 prototype은 데이터 프로퍼티이다.
Object.getOwnPropertyDescriptor(function () { }, 'prototype')



/* 프로퍼티 정의 */
const person = {};

//프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Liz',
  writable: true,
  enumrable: true,
  configurable: true
})

Object.defineProperty(person, 'lastName', {
  value: 'Kook'
})

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);


//접근자 프로퍼티 정의
const person = {};

Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true
});
/* 
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
 */
person.fullName = 'Eunwoo Cha';
console.log(person);

//객체확장금지
const person = { name: 'Lee' };

//확장가능여부 체크
console.log(Object.isExtensible(person));// true

//프로퍼티 추가 금지
Object.preventExtensions(person);

console.log(Object.isExtensible(person));//false

person.age = 20; //무시된다
console.log(person); //{name: 'Lee'}

//추가는 금지되지만 삭제는 가능하다
delete person.name;
console.log(person); // {}

//프로퍼티 정의로 추가해봐도 금지 상태
Object.defineProperty(person, 'age', { value: 20 });
//TypeError: Cannot define property age, object is not extensible

