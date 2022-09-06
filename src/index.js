/**
 * 파라미터에 'nico'를 주어 함수를 호출할때 아무런 인수를 넣지 않을때
 * 지정한 default value로 함수를 동작하게 할 수 있다.
 * @param {string} aName string으로 인수를 받는다.
 * @returns aNmae으로 받은 값을 'Hello'와 더해서 반환된다.
 */
function sayHi1(aName = "nico") {
  return "Hello " + aName;
}
console.log(sayHi1());

/**
 * arrow function으로 default value를 사용하는 모습이다.
 * @param {string} aName string으로 인수를 받는다.
 * @returns aNmae으로 받은 값을 'Hello'와 더해서 반환된다.
 */
const sayHi2 = (aName = "anon") => "Hello " + aName;
console.log(sayHi2());
