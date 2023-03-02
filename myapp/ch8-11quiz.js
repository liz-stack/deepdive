


//옵셔널 체이닝으로 변환해보기

let users = {}

console.log(users.user.name)  //TypeError: Cannot read property 'name' of undefined


console.log(users?.user?.name); //undefined
console.log(users.user?.name);  //undefined



var str = '';
var length = str && str.length;
console.log(length);


var length = str?.length