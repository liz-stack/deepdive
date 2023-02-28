
//연산자

//산술연산자
5 * 4 // -> 20
console.log(5 * 4)

//문자열 연결 연산자
'My name is ' + 'Lee' // -> My name is Lee
console.log('My name is ' + 'Lee')

//할당 연산자
color = 'red' // -> 'red'
console.log(color)

//비교 연산자
3 > 5 // false
console.log(3 > 5)

//논리 연산자
true && false // ->false
console.log(true && false)

//타입 연산자
typeof 'Hi' // -> string
console.log(typeof 'Hi')



/* 산술 연산자 */

//단항 연산자
5 + 2; // -> 7, 늘 새로운 값을 만들어내고 부수 효과 없음.

//이항 연산자
var x = 5, result;

result = x++; //선할당 후증가(postfix increment operator)
console.log(result, x); // 5 6

result = ++x; //선증가 후할당(prefix increment operator)
console.log(result, x); // 7 7

result = x--; //선할당 후감소(postfix decremnet operator)
console.log(result, x); // 7 6

result = --x; //선감소 후할당(prefix decrement operator)
console.log(result, x); // 5 5

//숫자 아닌 타입에 + 연산자 사용시
var x = '1';
console.log(+x); // 1 <-숫자로 전환

x = false;
console.log(+x); // 0

x = 'Hello';
console.log(+x); /// NaN, 문자열은 숫자로 변환 불가

//문자열 연결 연산자
'1' + 2 // -> '12'
1 + true // -> 2
1 + false // -> 1
1 + null // -> 1

// +undefined // -> NaN
1 + undefined // -> Nan

/* 할당 연산자에 문자열 넣었을 때 */
var str = 'My name is '

str += 'Lee' // str = str + 'Lee'
console.log(str) // 'My name is Lee'


/*비교 연산자  */

//동등 비교
'0' == ''           //false
0 == ''             //true
0 == '0'            //true, 암묵적 타입 변환
false == 'false'    //false
false == '0'        //true
false == null       //false
false == undefined  //false

//일치 비교시 주의점
console.log(NaN === NaN) //false, NaN은 자신과 일치하지 않는 유일한 값  

//NaN은 자신과 일치하지 않는 유일한 값.
//Number.IsNaN함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다
Number.isNaN(NaN); // true
Number.isNaN(1 + undefined) // true

//숫자 0 비교시 Object.is 메서드 사용
0 === -0 // true
0 == 0 // true

Object.is(-0, +0) // false
Object.is(NaN, NaN) //true 

// !=, !==는 ==와 ===의 반대 개념
5 != 8 // true
5 != 5 // false
5 != '5' // 암묵적 타입변환으로 값이 같으니 false

5 !== 8 // true
5 !== 5 // false
5 !== '5' //true; 값은 같으나 타입이 다름

console.log(5 == '5');


/* 3항 조건 연산자 */

var x = 2
//2%2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수'
console.log(result)

/* 논리 연산자 */
//논리합 연산자
true || true    //true
true || false   //true
false || true   //true
false || false  //false

//논리곱 연산자
true && true    //true
true && false   //false
false && true   //false
false && false  //false

//논리 부정 연산자
!true    //false
!false   //true

//암묵적 타입 변환
!0          //true ; 0=false
!'Hello'    //false

console.log('Hello') //Hello
console.log(!'Hello') //false


// c.f. 값을 부정하면, 할당된(존재하는?) 값인지를 기준으로 boolean을 출력한다.

!undefined // 할당되지 않은 값을 부정하므로, true (참스러움, truthy)
!'World' // 할당된 'string'을 부정하므로, false (거짓스러움, falsy)
!!'Hello'// true

//단축 평가
'Cat' && 'Dog' // ->'Dog

//드모르간의 법칙_가독성 높여줌
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)



/* 쉼표 연산자 */
var x, y, z
x = 1, y = 2, z = 3 //3


let x = (2, 3);

console.log(x); // Expected output: 3


/* typeof 연산자 */
typeof ''               //string
typeof 1                //number
typeof NaN              //number
typeof true             //boolean
typeof undefined        //undefined
typeof Symbol()         //symbol
typeof null             //object; 버그, 수정불가
typeof []               //object
typeof {}               //object
typeof new Date()       //object
typeof /test/gi         //object
typeof function () { }  //function

typeof undeclared       //undefined


/* 지수 연산자 */

2 ** 2      //4
2 ** 2.5    //5.65685424949238
2 ** 0      //2
2 ** -2     //0.25 ; ==> 1/2 ** 2

console.log(2 ** 2.5)

    //음수를 거듭제곱의 밑으로 사용하려면 다음과 같이 괄호로 묶어야 한다.
    (-5) ** 2	// 25

//할당 연산자와 함께 사용
var num = 5
num **= 2   //25

//이항 연산자 중에서 우선순위 가장 높음
2 * 5 ** 2 //50


/* 부수효과 가진 연산자 */

var X
x = 1
console.log(x) //1

x++
console.log(x) //2

var o = { a: 1 }

delete o.a
console.log(o)  // { }

/* 연산자 우선순위 */

/* 
1 ( )
2 new(매개변수 O), [](프로퍼티 접근), ()(함수 호출), ?.(옵셔널 체이닝 연산자)
3 new(매개변수 X)
4 x++, x--
5 !x, +x, -x, ++x, --x, typeof, delete
6 **
7 *, /, %
8 +, -
9 <, <=, >, >=, in, insteadof
10 ==, !=, ===, !===
11 ??(null 병합 연산자)
12 &&
13 ||
14 3항 조건 연산자 ( ? ... : ...)
15 할당 연산자(=, +=, -+, ...)
16 ,
*/