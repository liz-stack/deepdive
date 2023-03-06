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