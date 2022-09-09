/**
 * 이론상 fetch에 에러가 발생하고 console이 실행 되어야
 * 하지만, 그렇지 않고 console이 먼저 실행이 되고 fetch의
 * 에러상태가 출력된다.
 */
const hello = fetch("https://google.com");

console.log("something");
console.log(hello);
