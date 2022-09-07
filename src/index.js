/**
 * friends를 정의하는거와 Array.of는 동일한 동작을 한다.
 */
const friends = ["nico", "lynn", "dal", "mark"];
const friends1 = Array.of("nico", "lynn", "dal", "mark");
console.log(friends1);

/**
 * HTML의 elements를 가져오면 array를 흉내낸 NodeList가 나온다.
 */
const buttons = document.querySelectorAll("button");
console.log(buttons);

/**
 * btns도 마찬가지로 array를 흉내낸 HTMLCollection이 나온다.
 */
const btns = document.getElementsByClassName("btn");
console.log(btns);

/**
 * NodeList와 HTMLCollection은 array를 흉내낸 `array-like object`이며 array가 아니다.
 * 그래서 이론상 array로 접근 가능한 함수들을 사용하면 에러가 발생한다.
 * 그리고 array-like를 array를 변환해주는 함수인 `Array.from()`으로 변환한다.
 * @example
 * btns.forEach((btn) => {
 *   btn.addEventListener("click", () => console.log("I ve been clicked"));
 * });
 * @description
 * 그래서 array함수를 사용하기위해 from을 사용하여 array-like를 변환 후 사용한다.
 */
Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", () => console.log("I ve been clicked"));
});
