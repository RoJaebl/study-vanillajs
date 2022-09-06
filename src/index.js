/**
 * @description `"Hello " + aName`이걸 template literals라고 부른다.
 * string form 앞뒤로 백틱``을 붙혀 쓰여진 모든 문자를 string으로 변환해준다.
 */
const sayHi1 = (aName = "anon") => `Hello ${aName} lovely to have you`;
// `"Hello " + aName + " lovely to have you"`;
console.log(sayHi1());

/**
 * @description ${}안에 함수를 넣어 사용할 수 있다.
 */
const sum = (a, b) => a + b;
const sayHi2 = (aName = "anon") => `Hello ${sum(1, 2)} lovely to have you`;
// `"Hello " + aName + " lovely to have you"`;
console.log(sayHi2());
