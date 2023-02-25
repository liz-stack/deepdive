
y = 10;

y >= 0 ? console.log('y는 양수') : console.log('y는 음수');


//1. 
/* console.log(score);

score = 80;
var score;

console.log(score); */

//2.
console.log(typeof null);  //Object

//3. 
var y = null;
var x = 10;

console.log(y === 10)

//4. NaN 비교
NaN === NaN //false


//2. xOR 연산자
/* 
10 xor 10 => 00
10 xor 01 => 11

5 xor 5 => 0
0 xor 4 => 4

1 xor 1 xor 2 -
1 xor 2 xor 1 =


1,1,2,3,3,4,4
0,2,3,3,4,4
0,2,0,0
2



*/
//boolean 타입은 엔진에 따라 1byte 또는 4byte 의 크기를 가집니다. 왜?

//3. 인터프리터 언어가 컴파일 언어보다 느린 이유? 어떻게 코딩을 해야 자바스크립트의 성능을 끌어올릴 수 있을지?
//인터프리터 : python, javascript
//컴파일언어 : java, C

/* 동적타입 언어도 정적 타입의 언어처럼 코딩을 하면 성능 개선된다(타입이 변경되지 않게) 

*/



//1. 동적 타입 언어의 단점 말해보기


//2. 변수에 값을 재할당 할 때, 이전에 저장되어있던 메모리 공간을 지우고 그 곳에 값을 저장한다 ( O / X )


//3. 표현식과 표현식이 아닌 문 구분하는 방법?



//1.

var s = 20;
console.log(s + true); //21 , 
console.log(`${s}` + true); //20true , 문자열

//3. 
console.log(5 ** 0); //5의 0승 