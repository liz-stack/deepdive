//ch12 함수


//변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
};

//1. 함수 선언문
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
}; //기명 함수 표현식

console.log(add(2, 5));

console.log(foo(2, 5));


/* 3. 함수 생성 시점과 호이스팅 */

//함수 참조
console.dir(add); // [Function: add]
console.dir(sub); // undefined

//함수 호출
console.log(add(2, 5)); //7
console.log(sub(2, 5)); //TypeError: sub is not a function

//함수 선언문
function add(x, y) {
    return x + y;
}

//함수 표현식
var sub = function (x, y) {
    return x + y;
}

/* Function 생성자 함수 */
var add = new Function('x', 'y', 'return x + y');
console.log(add(2, 5)); //7

//함수 선언문 리턴
var add1 = (function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());

console.log(add1(1, 2)); //13

//생성자 함수 리턴
var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;')
}());

console.log(add2(1, 2)); //ReferenceError: a is not defined


/* 화살표 함수 */
const add = (x, y) => x + y;
console.log(add(2, 5));


/* 매개변수와 인수 */

//1 매개변수의 스코프
function add(x, y) {
    console.log(x, y); //2,5
    return x + y;
};

add(2, 5);

console.log(x, y); //ReferenceError: x is not defined

//2 매개변수 개수 일치하는지 확인X

function add(x, y) {
    return x + y;
}
console.log(add(2)); //NaN

//함수 파라미터 확인
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.')
    } //'number' 라고 쓰는 이유가 몰까..
    return x + y;
}

console.log(add(2)); //TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add('a', 'b')); //TypeError: 인수는 모두 숫자 값이어야 합니다.

//단축 평가를 사용해 매개변수에 기본값 할당
function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1, 2, 3)); //6
console.log(add(1, 2)); //3
console.log(add(1)); //1
console.log(add()); //0

//매개변수에 기본값 사용
function add(a = 0, b = 0, c = 0) {
    return a + b + c;
}
console.log(add(1, 2, 3)); //6
console.log(add(1, 2)); //3
console.log(add(1)); //1
console.log(add()); //0


//반환문
//함수의 실행을 중단하고 함수 몸체를 빠져나간다. 
function multiply(x, y) {
    return x * y;//반환문
    //반환문 이후에 다른 문이 존재하면 그 문은 무시된다. 
    console.log('실행되지 않는다.');
}
console.log(multiply(3, 5));

//반환문의 표현식 지정하지 않을 경우 
function foo() {
    return;
}
console.log(foo()); //undefined

//반환문은 생략할 수 있다.
function foo() {

}
console.log(foo()); //undefined

//세미콜론 자동삽입 주의
function multiply() {
    return //ASI에 의해 세미콜론 추가
    x + y; //무시된다.
}
console.log(multiply(2, 5)); //undefined 


/* 참조에 의한 전달과 외부 상태의 변경 */

function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

//외부 상태
var num = 100;
var person = { name: 'Lee' };

console.log(num); //100
console.log(person); //{ name: 'Lee' }

//원시 값은 값 자체가 복사되어 전달
//객체는 참조 갑싱 복사되어 전달
changeVal(num, person);

//원시 값은 원본이 훼손되지 않는다.
console.log(num); ///100

//객체는 원본이 훼손된다. 
console.log(person); //{ name: 'Kim' }


/* 즉시 실행 함수 */
//익명 즉시실행함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

//기명 즉시실행함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());

foo();

//그룹 연산자 반드시 필요
function() { //identifier expected!
} ();

function foo() {
} (); // => };();
//세미콜론 자동 삽입으로 중괄호} ;이 추가됨

//()가 함수 호출 연산자가 아니라 그룹 연산자로 해석되고
//그룹 연산자에 피연산자가 없기 때문에 에러 발생
function foo() { } ();
console.log(function foo() { }();
); //SyntaxError: Unexpected token ')'

();
console.log(();); //SyntaxError: Unexpected token ')'

//그룹 연산자 이외의 연산자도 사용 가능
(function () {
    var a = 3;
    var b = 5;
    return a * b;
})();

!function () {
}();

+function () {
}();

//일반 함수처럼 사용 가능
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res); //15

//인수 전달 가능
res = (function (a, b) {
    return a * b
}(3, 5))

console.log(res);

/* 재귀함수 */

//반복문 사용
function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
}
countdown(5);

//재귀함수 사용
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1); //재귀 호출
}
countdown(5);

//함수 표현식
var factorial = function foo(n) {
    if (n <= 1) return 1;
    //함수를 가리키는 식별자로 자기 자신을 재귀 호출
    //return n * factorial(n - 1);

    //함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
    console.log(factorial === foo); //true
    return n * foo(n - 1)
};
console.log(factorial(5)); //120


//탈출조건 반드시 필요
function factorial(n) {
    if (n <= 1) return 1;

    var res = n;
    while (--n) res *= n;
    return res;
}
console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(4)); //24
console.log(factorial(5)); //120

/* 중첩함수 */
function outer() {
    var x = 1;

    //중첩 함수
    function inner() {
        var y = 2;
        //외부 함수의 변수를 참조할 수 있다.
        console.log(x + y); //3
    }
    inner();
}
outer();

/* 콜백함수 */
//외부에서 전달받은 f를 n만큼 반복 호출
function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}

var logAll = function (i) {
    console.log(i);
};

//반복 호출할 함수를 인수로 전달
repeat(5, logAll)

//logOdds 함수는 단 한번만 생성된다.
var logOdds = function (i) {
    if (i % 2) console.log(i);
};

//반복 호출할 함수를 인수로 전달, 고차 함수에 함수 참조를 전달하는 것
repeat(5, logOdds) // 1 3


//익명 함수 리터럴을 콜백 함수로 고차 함수에 전달
//익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function (i) {
    if (i % 2) console.log(i);
}) //1 3


//콜백 함수를 사용한 이벤트 처리
//myButton 버튼을 클릭하면 콜백 함수를 실행한다.
document.getElementById('myButton').addEventListener('click', function () {
    console.log('button clicked!');
});

//콜백 함수를 사용한 비동기 처리
//1초 후에 메시지 출력
setTimeout(function () {
    console.log('1초 경과');
}, 1000);

//콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
    return item * 2;
})
console.log(res); //[2,4,6]

//콜백 함수를 사용하는 고차함수 filter
res = [1, 2, 3].map(function (item) {
    return item % 2;
})
console.log(res); //[1,3]

//콜백 함수를 사용하는 교차함수 reduce
res = [1, 2, 3].map(function (acc, cur) {
    return acc + cur;
}, 0);

console.log(res);


/* 순수함수 */
var count = 0;

//순수함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환
function increase(n) {
    return ++n;
}

//순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count);

count = increase(count); //1
console.log(count); //2

/* 비순수함수 */
var count = 0;

function increase() {
    return ++count; //외부 상태에 의존하며 외부 상태를 변경
}

//비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어렵다.
increase();
console.log(count); //1

increase();
console.log(count); //2

