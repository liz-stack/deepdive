//ch12 함수


//변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
};

//1 함수 선언문
function add(x, y) {
    return x + y;
}

console.log(add);

//함수 참조. dir은 함수 객체의 프로퍼티까지 출력됨
console.dir(add); //[Function: add]

//함수 호출
console.log(add(2, 5)); //7

//함수 선언문에서는 함수 이름 생략 불가
function foo() { console.log('foo'); }
foo(); //foo

(function bar() { console.log('bar'); })
bar(); //ReferrenceError: bar is not defined

//2. 함수 표현식
var add = function foo(x, y) {
    return x + y;
};
console.log(add(2, 5));

console.log(foo(2, 5));