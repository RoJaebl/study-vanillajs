/**
 * scope 안에서 선언된 var 변수는
 * scope 밖에 있는 console이 hello변수에 접근이 가능하다.
 */
if (true) {
  var hello1 = "hello1";
}
console.log(hello1);

/**
 * scope 안에서 선언된 let, const 변수는
 * scope 밖에 있는 console이 hello변수에 접근이 불가능하다.
 */
if (true) {
  let hello2 = "hello2";
}
console.log(hello2);

/**
 * function scope에서 var은 let과 const와 규칙이 동일하다.
 */
function hello() {
  var hello3 = "hello3";
}
console.log(hello3);
