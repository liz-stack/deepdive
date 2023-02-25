
//4. 변수

//4.1 변수란 무엇인가? 왜 필요한가?

var result = 10 + 20
// result : 변수 이름(식별자; identifier)
// 30 :변수 값 


//4.3 변수 선언
/* var score;
 */

//4.4. 변수 호이스팅

console.log(score); //undefined

var score; //변수 선언문

//4.5 값의 할당
console.log(score); //undefined

var score; //변수 선언
score = 80; //값의 할당

console.log(score); // 변수 선언과 값의 할당. 
//하나의 문으로 변수 선언과 할당을 단축 표현한 선언문(statement)
//함께 실행하지 않고, 변수 선언과 값의 할당을 2개의 문으로 나누어 각각 실행  


//4.6 값의 재할당
var score = 80; //변수 선언과 값의 할당
score = 90; //값의 재할당


//4.7 식별자 네이밍 규칙

var firstName; //카멜케이스(변수, 함수)

var first_name; //스네이크케이스

var FirstName; //파스칼케이스(클래스, 생성자 함수)

var strFirstName; //헝가리안케이스; type + identifier
var $elem = document.getElementById('myId'); //DOM 노드
var observable$ = fromEvent(document, 'click'); //RxJS 옵저버블