/**
 * push를 사용하지않고 spread만으로 요소를 손쉽게 추가하는 방법이다.
 */
const friends = ["nico", "lynn"];
const newFriends = [...friends, "dal"];

console.log(newFriends);

/**
 * object도 쌉가능이다.
 */
const nico = {
  username: "nico",
};
console.log({ ...nico, password: 123 });

/**
 * 좀더 다양하고 복잡한 코드도 쉽게 구현이 가능하다.
 */
const first = ["mon", "tue", "wed"];
const weekend = ["sat", "sun"];

const fullWeek = [...first, "thu", "fri", ...weekend];
console.log(fullWeek);

/**
 * 여러가지 방법으로 lastName이라는 값을 요소에 추가할 수 있다.
 * 하지만 spread를 이용하여 object요소에 lastName값이 없으면
 * 아예 요소로 추가하지 않게 할려면 `...(condition && {})`으로
 * 정의해야한다.
 */
const lastName = prompt("Last name");
const user = {
  username: "nico",
  age: 24,
  ...(lastName != "" && { lastName }),
  //lastName: lastName != "" ? lastName : null,
};
console.log(user);
