
//ch6 데이터 타입

//6.1 숫자 타입
var integer = 10;
var double = 10.12;
var negative = -20;

//표기법만 다를 뿐 모두 같은 값
var binary = 0b01000001; //2진수
var octal = 0o101; //8진수
var hex = 0x41; //16진수

/* console.log(binary); //65
console.log(octal); //65
console.log(hex); //65
console.log(binary === octal); //true
console.log(octal === hex); //true


//숫자 타입은 모두 실수로 처리된다. 
console.log(1 === 1.0); //true
console.log(4 / 2); //2
console.log(3 / 2); //1.5

//숫자 타입의 세 가지 특별한 값
console.log(10 / 0);
console.log(10 / -0);
console.log(1 * 'string')
 */

//6.2 문자열 타입
var string;
string = '문자열'; //작은 따옴표
string = "문자열"; // 큰 따옴표
string = `문자열`; //백틱

string = '작은 따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식된다.";

//var string = hello; //ReferenceError, 식별자로 인식


//6-3. 템플릿 문자열
/* var template = `Template literal`;
console.log(template); //템플릿 리터럴
 */
/* var str = 'Hello
world.';  */
//Syntax Error; Invalid or unexpected token

/* var template = `<ul>
<li><a href="#">Home</a></li>
</ul>`;

console.log(template);


var first = 'Liz';
var last = 'Lee';

console.log('My name is ' + first + ' ' + last + '.');
 */

//표현식  삽입(백틱)
var first = `Liz`;
var last = `Lee`;

console.log(`My name is ${first} ${last}.`)


console.log(`1 + 2 = ${1 + 2}`);
console.log('1 + 2 = ${1 + 2}'); //일반 문자열에서의 표현식 삽입은 문자열 취급


//6.4 불리언 타입

var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false

//6.5 undefined
var foo;
console.log(foo);

//6.6 null
var foo = 'Lee';
foo = null; //이전 참조를 제거. 
//유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 
//변수 자체를 재빨리 소멸시키는 편이 낫다.

/* <!DOCTYPE html>
<html>
    <body>
        <script>
            var element = document.querySelector('.myClass');

            //myClass 클래스를 갖는 요소가 없다면 null을 반환
            console.log(element); //null
        </script>

    </body>
</html> */


//6.7 심벌타입

//심벌 값 생성
/* var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용
obj[key] = 'value';
console.log(obj[key]); //value
 */

//6.9 데이터 타입의 필요성

//6.9.1 데이터 타입에 의한 메모리 공간의 확보와 참조

var score = 100;


//6.10 동적 타이핑
/* 
//C에서 정수 타입의 언어를 선언하는 경우
char c; //1바이트 정수 타입의 값(-128~127)만 할당 가능

int num; //4바이트 정수 타입의 값(-2124483648 ~ 2124483647) 만 할당 가능
 */

var foo;
console.log(typeof foo); //undefined

foo = 3;
console.log(typeof foo); //number

foo = 'Hello';
console.log(typeof foo); //string

foo = true;
console.log(typeof foo); //boolean

foo = null;
console.log(typeof foo); //object 

foo = Symbol();
console.log(typeof foo); //symbol

foo = {};
console.log(typeof foo); //object

foo = [];
console.log(typeof foo); //object

foo = function () { }; //함수
console.log(typeof foo); //function