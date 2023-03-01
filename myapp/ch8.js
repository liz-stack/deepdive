//ch8 제어문


/* 블록문 */

//블록문
{
    var foo = 10;
}

//제어문
var x = 1;
if (x < 10) {
    x++;
}

//함수 선언문
function sum(a, b) {
    return a + b;
}

/* 조건문 */

//if...else문
/* if (조건식) {
    //조건식이 참이면 이 블록이 실행된다.
} else {
    //조건식이 거짓이면 이 블록이 실행된다.
} */


var num = 2;
var kind;

//if문
if (num > 0) {
    kind = '양수' //음수를 구별할 수 없다.
}

console.log(kind) //양수

//if.. else문
if (num > 0) {
    kind = '양수'
} else {
    kind = '음수'
}
console.log(kind) //양수

//if... else if문
if (num > 0) {
    kind = '양수'
} else if (num < 0) {
    kind = '음수'
} else {
    kind = '0'
}
console.log(kind) //양수

//만약 코드 블록 내의 문이 하나라면 중괄호를 생략할 수 있다.
if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '양수';


//if else문 
var x = 2
var result

if (x % 2) {
    result = '홀수'
} else {
    result = '짝수'
}

console.log(result); //짝수

//if else-> 3항 조건 연산자
var result = x % 2 ? '홀수' : '짝수';

console.log(result); //짝수

//경우의 수가 3가지인 3항 연산자로 변환
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
//0보다 크면 num ? 양수 : 영  
//0보다 작으면 num ? 음수 : 영  


/* switch문 */
/* switch (표현식) {
    case 표현식1:
        switch문의 표현식과 표현식1이 일치하면 실행될 문
        break;
    case 표현식2:
        switch문의 표현식과 표현식2이 일치하면 실행될 문
        break;
    default:
        switch문의 표현식과 일치하는 case문이 없을 때 실행될 문;
} */


//월을 영어로 변환한다. (11->'November')
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January'; break;
    case 2: monthName = 'February'; break;
    case 3: monthName = 'March'; break;
    case 4: monthName = 'April'; break;
    case 5: monthName = 'May'; break;
    case 6: monthName = 'June'; break;
    case 7: monthName = 'July'; break;
    case 8: monthName = 'August'; break;
    case 9: monthName = 'September'; break;
    case 10: monthName = 'October'; break;
    case 11: monthName = 'November'; break;
    case 12: monthName = 'December'; break;
    default: monthName = 'Invalid month';
}
console.log(monthName); //November 
//Invalid month(break 없을시)
//문의 실행 후 탈출하지 않으면  모든 문을 실행하는 fall through현상 나타남


//폴스루가 유용하게 쓰이는 경우
var year = 2000; //2000년은 윤년으로 2월이 29일이다. 
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        //(4로 나누어 떨어지면서 100으로 나누어 떨어지지 않는 해 )또는 400으로 나눠지는 해 == 윤년
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28
        break;
    default:
        console.log('Invalid Month');
}

console.log(days);

/* 반복문 */

//for문
for (var i = 0; i < 2; i++) {
    console.log(i);
}

// 이중 중첩 for문
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`)
    }
}


/* while문 */

var count = 0;

while (count < 3) {
    console.log(count);
    count++;
}

//무한 루프 멈추기
var count = 0;

while (true) {
    console.log(count);
    count++;
    //count가 3이면 코드 블록을 탈출한다.
    if (count === 3) break;
} // 0 1 2


/* do... while문 */
var count = 0;

do {
    console.log(count); //0 1 2
    count++;
} while (count < 3);


/* label 문 */

//foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

//foo라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo;//foo 레이블 블록문을 탈출한다.
    console.log(2);
}
console.log('Done!');

//outer라는 식별자가 붙은 레이블 for문
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}
console.log('Done!');

//문자열에서 특정 문자의 인덱스(위치)를 검색해보기
var string = 'Hello World';
var search = 'l';
var index;

for (var i = 0; i < string.length; i++) {
    if (string[i] == search) {
        index = i;
        break;
    }
}
console.log(index); //2

//참고로 String.prototype.indexOf 메서드를 사용해도 동일한 동작을 한다.
console.log(string.indexOf(search)); //2


/* continue문 */

var string = 'Hello World';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {

    //'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동
    if (string[i] !== search) continue;
    count++; //continue문이 실행되면 여기는 실행 안됨.
}
console.log(count); //3

//String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); //3

console.log(string.match(/l/g).length); //3

//c.f. ("문자열").match(/정규표현식/플래그)
//"문자열"에서 "정규표현식"에 매칭되는 항목들을 배열로 반환
//ex. /다/g : '다'를 '모두' 찾는다

//위 예제의 for문은 다음 코드와 동일하게 동작
for (var i = 0; i < string.length; i++) {
    if (string[i] === search) count++
}