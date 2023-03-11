

//var 키워드로 선언한 변수의 문제점

//변수 중복선언 허용

var x = 1;
var y = 1;

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var x = 100;

//초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x); //100
console.log(y); //1


//함수레벨 스코프
var x = 1;

if (true) {
    // 이미 선언된 전역변수 x가 있으므로 x는 중복선언된다.
    // 이는 의도치 않게 변수값이 변경되는 부작용을 방지한다.
    var x = 10;
}
console.log(x); //10


/* let 키워드 */

//이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다.(1. 선언 단계)
//변수 foo는 undefined로 초기화된다. (2. 초기화 단계)
console.log(foo); //undefined

//변수에 값을 할당(3. 할당 단계)
foo = 123;

console.log(foo); //123

var foo;

var foo = 123;
// var 키워드 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var foo = 456; //->456 

let bar = 123;
//let bar = 456; //SyntaxError: bar is not defined


//블록 레벨 스코프를 사용하는 let
let foo = 1; // 전역
{
    let foo = 2; //지역
    let bar = 3; //지역
}

console.log(foo); //1
console.log(bar); //RefError: bar is not defined.


//함수도 코드블록이므로 스코프를 만들고, 함수 내의 코드블록은 함수 레벨 스코프에 중첩된다.
let i = 10; //전역

function foo() {
    let i = 100; //함수레벨 스코프
    for (let i = 1; i < 3; i++) { //블록레벨 스코프
        console.log(i);
    }
    console.log(i); //100, 함수레벨 스코프
}

foo();

console.log(i);

//변수 호이스팅이 발생하지 않은 것처럼 보이지만 그렇지 않다.
let foo = 1; //전역변수
{
    console.log(foo); //RefError
    let foo = 2; //지역변수
}

//전역 객체와 let
//var키워드의 경우 먼저

//전역변수
var x = 1;
y = 2; //암묵적 전역

function foo() { }

console.log(window.x); //1
console.log(x); //1, 전역객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.

//암묵적 전역은 전역 객체 window의 프로퍼티
console.log(window.y); //2
console.log(y); //2 

//전역 함수또한 window의 프로퍼티
console.log(window.foo); //f foo() {}
console.log(foo); //f foo() {}

let x = 1;
console.log(window.x); //undefined
console.log(x); //1



//const키워드로 선언된 변수에 객체를 할당한 경우 값의 변경이 가능하다.
const person = {
    name: 'Lee'
};

person.name = 'Kim';

console.log(person); //{ name : "Kim"}


/* 14-15장 토론 */
// 클로저 사용시 중첩함수가 있으면, 중첩함수가 외부함수보다 오래 살아남는 경우가 있다.

// 모듈<클래스 선호하는 이유? 가독성, 개인 취향


//네임스페이스 오염이 뭘까?
// 전역변수 사용하는 케이스? 코딩하다가 에러가 났는데
// 전역변수를 전달하다 보면은 편하지만 추적하지 어렵다.

/*
즉시실행함수로 사용하는 이유? 익명함수기 떄문에 잘 사용하지는 않는다.(가독성 떨어짐)
- 옛날 테크닉인거 같다.
- 프론트엔드 개발자들은 라이브러리 많이 사용
- 리액트의 경우 모듈을 많이 쓰니까 지역변수 스코프로 잡아서 쓰는 경우가 많은데
  에이전시 회사(퍼블리셔)에서는 즉시실행 함수 많이씀.
 (헤더, 메인 컨텐츠에 들어가는 애니메이션 등등)
 */

// Jayz - 즉시실행함수는 클래스로 대체할 수 있다, 익명함수 디버깅 불편하다.


/* 호이스팅 */
// let, const, class를 사용한 선언문은 호이스팅이 발생
// 인식은 하는데 값을 주지는 않는다. (할당단계가 오기 전까지)


// 전역변수를 쓰면 속도가 느려진다?
// 전역변수를 쓰는게 오히려 속도 향상에 도움이 된다._ C언어 같은 경우만 해당