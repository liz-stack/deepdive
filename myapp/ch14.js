//CH14 전역 변수의 문제점

//지역 변수의 생명주기
function foo() {
    var x = 'local';
    console.log(x); //local
    return x;
}

foo();
console.log(x); //refError

//지역 변수의 호이스팅
var x = 'global';

function foo() {
    console.log(x);
    var x = 'local';
}

foo();
console.log(x);

/* 전역변수의 사용을 억제하는 방법 */

//즉시실행함수
(function () {
    var foo = 10;
    // ...
}());
console.log(foo);

//네임스페이스 객체

var MYAPP = {}; //전역 네임스페이스객체

MYAPP.name = 'Lee';

console.log(MYAPP.name);


//네임스페이스의 계층적 구성
var MYAPP = {};

MYAPP.person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log(MYAPP.person.name);

//모듈 패턴
var Counter = (function () {
    //private 변수
    var num = 0;

    //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }

    };
}());

//private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); //undefined

console.log(Counter.increase); //1
console.log(Counter.increase); //2
console.log(Counter.decrease); //1
console.log(Counter.decrease); //0

//ES6모듈 사용
/* 
<script type="module" src="lib.mjs"></script>
<script type="module" src="app.mjs"></script> */