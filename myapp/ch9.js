//ch9 타입 변환과 단축 평가

/* 9.1 타입변환 */


//명시적 타입변환
var x = 10;

var str = x.toString(); //숫자를 문자열로 타입 캐스팅
console.log(typeof str, str); //string str

console.log(typeof x, x); //number 10

//암묵적 타입변환
var x = 10;

var str = x + '';
console.log(typeof str, str); // string 10

console.log(typeof x, x); // number 10


/* 암묵적 타입 변환 */

`10` + 2 //102

//피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10' //50

//피연산자나 표현식이 불리언 타입이어ㅑ 하는 문맥
10 //->true
if (1) { }


/* 문자열 타입변환 */

//표현식에서도 암묵적 타입변환 나타남
`1 + 1 = ${1 + 1}` // "1 + 1 = 2", 표현식의 평가 결과를 문자열 타입으로 변환

//숫자 타입
0 + ''              // "0"
    - 0 + ''             // "0"
1 + ''              // "1"
NaN + ''            // "Nan"
Infinity + ''       // "Infinity"  
    - Infinity + ''      // "-Infinity"  

//불리언 타입
true + ''           // "true"
false + ''          // "false"

//null, underined, Symbol
null + ''           // "null"
undefined + ''      // "undefined"
    (Symbol() + '') // TypeError: Cannot convert a Symbol value to a String

    //객체 타입
    ({}) + ''       // "[object Object]"
Math + ''           // "[object Math]"
//[] + ''             // ""
[10, 20] + ''   // "10,20"
        (function () { }) + '' // "function(){}"
Array + ''          // "function Array() { [native code] }"

console.log([] + '');
console.log((function () { }) + '');
console.log(Array + '');


/* 숫자 타입으로 변환 */

//산술 연산자
1 - '1' // 0\
1 * '10' //10
1 / 'one' //NaN

//비교 연산자
'1' > 0 // true

    //단항 연산자는 피연산자가 숫자 타입의 값이 아니면 암묵적 타입 변환을 수행

    + ''         // 0
    + '0'        // 0
    + 'string'   // NaN
    + 'true'     // 1 , 불리언
    + 'false'    // 0
    + 'null'     // 0
    + undefined    // NaN
    + Symbol()   //TypeError: Cannot convert a Symbol value to a number

    //객체타입
    + {}     //NaN
    + []     //0
    + [10, 20]   //NaN
    + (function () { }) //NaN



/* 불리언 타입으로 변환 */

if ('') console.log(1);
if (true) console.log('2'); //2
if (0) console.log('3');
if ('str') console.log('4'); //4
if (null) console.log('5');


//Truthy/Falsy 값 판별하기.
function isFalsy(v) { //Falsy => true, Truthy => false 리턴
    return !v;
}

function isTruthy(v) { //Falsy => false, Truthy => true 리턴
    return !!v;
}

isFalsy(false);             //true
isFalsy(undefined);         //ture
isFalsy(null);              //true
isFalsy(0);                 //true
isFalsy(NaN);               //true
isFalsy('');                //true

isTruthy(true);             //true
isTruthy('0');              //true
isTruthy({});               //true
isTruthy([]);               //true

console.log(isFalsy(false));
console.log(isTruthy('0')); //빈 문자열이 아닌 문자열은 Truthy값


/* 문자열 타입으로 변환 */

//1.String 생성자 함수를 new 연산자 없이 호출
String(1);          //"1"
String(NaN);        //"NaN"
String(Infinity)    //"Infinity"

String(true)        //"true"
String(false)       //"false"


    //2. Object.prototype.toString 메서드 사용
    (1).toString();         //"1"
(Nan).toString();       //"NaN"
(Infinity).toString();  //"Infinity"
(true).toString();      //true
(false).toString();     //false

//3. 문자열 연결 연산자 사용
1 + '';             //"1"
NaN + '';           //"NaN"
Infinity + '';      //"Infinity"
true + '';          //"true"
false + '';         //"false"


/* 숫자 타입으로 변환 */

//1. Number 생성자 함수를 new 연산자 없이 호출
Number('0');        //0
Number('-1');       //-1
Number('10.53');    //10.53
Number(true);       //1
Number(false);      //0

//2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
parseInt('0');      //0
parseInt('-1');     //-1
parseInt('10.53')   //10.53

    //3. +단항 산술 연산자 이용
    + '0';       //0
+'-1';      //-1
+'10.53';   //10.53
+'true';    //1
+'false';   //0

//4. *산술 연산자 이용
'0' * 1;        //0
'-1' * 1;       //-1
'10.53' * 1;    //10.53
+true;          //1
+false;         //0

/* 불리언 타입으로 변환 */

//1 Boolean 생성자 함수를 new 연산자 없이 호출
Boolean('x');       //true
Boolean('');        //false
Boolean('false')    //true

Boolean(0)          //false
Boolean(1)          //true
Boolean(Nan)        //false
Boolean(Infinity)   //true
Boolean(null)       //false
Boolean(undefined)  //false
Boolean({})         //true
Boolean([])         //true

//2 !부정 논리 연산자를 두 번 사용
!!'x'       //true
!!''        //false
!!false     //true

!!0         //false
!!1         //true
!!NaN       //false
!!Infinity  //true
!!null      //false
!!undefined //false
!!{}        //true
!![]        //true


/* 단축평가 */

//논리합 연산자
'Cat' || 'Dog' // Cat
false || 'Dog' // Dog
'Cat' || false // Cat

//논리곱 연산자
'Cat' && 'Dog' // Dog
false && 'Dog' // false
'Cat' && false // false


//단축평가로 if문 대체
var done = true;
var message = '';

if (done) message = '완료';

message = done && '완료';
console.log(message); //완료 

//객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때

var elem = null;
var value = elem.value; //TypeError

var value = elem && elem.value; //null


//함수 매개변수에 기본값 설정할 떄

//단축 평가를 이용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();      // 0
getStringLength('hi');  // 2

//ESC 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

getStringLength();      //0
getStringLength('hi');  //2

/* 옵셔널 체이닝 연산자 ?. */

var elem = null;

var value = elem?.value;
console.log(value); //undefined

//?.이전에는 &&을 사용한 단축 평가를 통해 체크했다.
var value = elem && elem.value;
console.log(value); //null

//단축평가는 0이나 ''이 객체로 평가될 때가 있다는 단점이 있음.
var str = '';

var length = str && str.length;

console.log(length); // '' , 문자열의 길이를 참조하지 못한다.

//?.는 좌항이 falsy값 이라도 null 또는 undeined가 아니면 우항의 프로퍼티 참조를 이어나간다.
var length = str?.length;
console.log(length); //0


//null 병합 연산자 '??'
var foo = null ?? 'default string';
console.log(foo); //'default string'

//기본값 설정할 떄 유용(변수)
var foo = '' ?? 'default string';
console.log(foo); // "", 좌항의 피연산자가 Falsy값이라도 좌항을 리턴