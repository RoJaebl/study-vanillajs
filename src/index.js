/// generic function
/**
 * 일반적인 함수 선언
 */
function nameOf(params) {}

/**
 * 익명함수 선언
 */
function (params){};

/**
 * 변수함수 선언
 */
const variable1 = function (params) {};

/// arrow function
/// `=>`이걸 arrow라고 부른다.
/**
 * 익명화살표 함수 선언
 */
(params) => {};

/**
 * 변수화살표 함수 선언
 */
const variable2 = (params) => {};


/**
 * 함수선언, 익명함수, 화살표 함수를 모두 구현한 소스.
 */
const names = ["nico", "lynn", "flynn"];

function addHeart(item) {
  return item + " 💖";
}
const hearts1 = names.map(addHeart);
console.log(hearts1);

const hearts2 = names.map(function (item) {
  return item + " 💖";
});
console.log(hearts2);

const hearts3 = names.map((item, index) => {
  console.log(`we are on ${index}`);
  return item + " 💖";
});
console.log(hearts3);

/**
 * implicit return of arrow function
 * arrow function의 정의가 간단할 경우 impolicit return을 사용한다.
 * return을 사용하지않고 데이터 반환이 된다.
 */
const hearts4 = names.map((item) => item + " 💖");
console.log(hearts3);
