//ch5. 표현식과 문

//5.1 값(value)
10 + 20; //10+20은 평가되어서 숫자 값 30을 생성한다. 

var sum = 10 + 20;
//변수에는 10+20평가되어 생성된 숫자 값 30이 할당된다.


//5.2 리터럴

/* 3 //숫자 리터럴, 런타임에 리터럴을 평가해 값을 생성

10.5 //부동소수점 리터럴

0b01000001 //이진수 리터럴

0o101 //8진수 리터럴

0x41 //16진수 리터럴

'Hello', "World" //문자열 리터럴

true, false //불리언 리터럴

null //null 리터럴

undefined //undefiend 리터럴

{ name: 'Liz', address: 'Seoul' } //객체 리터럴

[1,2,3] //배열 리터럴

function() {} //함수 리터럴

/[A-Z]+/g //정규표현식 리터럴
 */


//5.3 표현식
var score = 100; //100이 리터럴 값으로 평가됨 → 표현식

var score = 50 + 50; //리터럴과 연산자 결합되어 평가. 값을 생성 

score; //숫자 100을 참조 표현식


10, 'Hello' //리터럴 표현식

10 + 20
sum = 10
sum !== 10 //연산자 표현식

/* 선언이 이미 존재한다고 가정 */
sum
personalbar.name
arr[1] //식별자 표현식

squre()
personalbar.getName() //함수/메서드 호출 표현식


//5.4 문

var x; //변수 선언문

x = 5; //할당문

function foo() { } //함수 선언문

if (x > 1) { console.log(x); } //조건문

for (var i = 0; i < 2; i++) { console.log(i); } //반복문


//5.6 표현식인 문과 표현식이 아닌 문

var x; //표현식X; 변수 선언문(값으로 평가될 수 없다)

x = 1 + 2; //표현식O; 1, 2, 1+2, x = 1+2 모두 표현식


//var foo = var x; // syntaxError: Unexpected token var

var x; //표현식 X (변수선언문)
x = 100; // 할당문, 그 자체가 표현식이지만 완전한 문.

var foo = x = 100; //표현식인 문은 값처럼 사용 가능
console.log(foo); //100 