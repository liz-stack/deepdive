//스코프

//변수 스코프
var var1 = 1; //코드의 가장 바깥에서 선언한 변수

if (true) {
    var var2 = 2; //코드 블록 내에서 선언한 변수
    if (true) {
        var var3 = 3; //중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo() {
    var var4 = 4; //함수 내에서 선언한 변수

    function bar() {
        var var5 = 5; //중첩 함수 내에서 선언한 변수 
    }
}

console.log(var1); //1
console.log(var2); //2
console.log(var3); //3
// console.log(var4); //ReferenceError: var4 is not defined
// console.log(var5); //ReferenceError: var5 is not defined


//식별자 결정
var x = 'global';

function foo() {
    var x = 'local';
    console.log(x); //local
}

foo();

console.log(x); //global

//var, let 키워드 
function foo() {
    var x = 1;
    var x = 2;
    console.log(x);
}
foo();

function bar() { //Cannot redeclare block-scoped variable 'x'.
    let x = 1;
    //let x = 2; //Identifier 'x' has already been declared
}
bar();

/* 전역, 지역스코프 */

var x = 'global x'; //전역 스코프
var y = 'global y';

function outer() {
    var z = "outer's local z"; //지역 스코프

    console.log(x); //global x
    console.log(y); //global y
    console.log(z); //outer's local z

    function inner() { //지역 스코프
        var x = "inner's local x";

        console.log(x); //inner's local x
        console.log(y); //gloval y, 전역변수
        console.log(z); //outer's local z , 지역변수
    }

    inner();
}  // function outer() {} : 전역 스코프

outer();

console.log(x); //global x
console.log(z); //refError


//스코프 체인에 의한 함수 검색

//전역함수
function foo() {
    console.log('global function foo');
}

function bar() {
    //중첩 함수
    function foo() {
        console.log('local function foo');
    }
    foo();
}

bar(); //local function foo

//함수 레벨 스코프
//함수 코드블록
var x = 1;
if (true) {
    //함수 밖에서 var키워드로 선언된 변수는 코드 블록(함수몸체) 내에서 선언되었다할지라도 모두 전역 변수.
    //따라서 x는 전역변수이고, 의도치 않게 변수 값이 변경된다. 
    var x = 10;
}
console.log(x); //10

//코드블록
var i = 10;

for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
console.log(i); //5

//비 블록 레벨 스코프
//함수 밖에서 선언된 변수는 코드 블록 내에서 선언되었다할지라도 
//모두 전역 스코프을 갖게된다. 따라서 변수 x는 전역 변수이다.
if (true) {
    var x = 5;
}
console.log(x);

/* 렉시컬 스코프  */

var x = 1;

function foo() {
    let x = 10;
    bar();
}

function bar(x) {
    console.log(x);
}

foo(); //1 
bar(2); //1

//스코프 체인 확인
var a = 1;
var outer = function () {
    var b = 2;
    var inner = function () {
        console.dir(inner);
    };
    inner();
};
outer();

console.dir(outer);

//토론

//콜스택
function globalFunction() {
    console.log('global');
    function innerFunction() {
        console.log('local');
    }
    innerFunction();
}

globalFunction(); // 장바구니 처럼 내려놓음


//전역 스코프와 지역 스코프의 쓰임 차이

//최대한 전역 스코프를 쓰지 말자. 이유?
/*
상위 방향으로 올라가며 변수를 검색하는데,
결국 마지막은 윈도우 객체가 됨

찾아 올라가는 것 자체가 시간이 더 걸린다.(성능)

전역 스코프로 선언한 객체가 있다면
모든 지역 스코프에서 전역을 참조할 수 있다.
디버깅 문제 발생

상수로 전역 선언해도 얼마든지 값을 바꿀 수 있다. <- 재할당만 불가능한 것.
*/

//작은 범위의 스코프를 써야 하는 이유?

//세미콜론 안쓰는 이유? 프리티어 제어 가능.