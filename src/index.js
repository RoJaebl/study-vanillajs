/**
 * 외부 API로부터 데이터를 아래와 같이 받아왔는데 요소의 이름이
 * 마음에 안들면 `콜론:`을 붙혀 rename을 해줄 수 있다.
 */
const settings = {
  color: {
    chosen_color: "dark",
  },
};

const {
  color: { chosen_color: chosenColor1 = "light" },
} = settings;

console.log(chosenColor1);

/**
 * object destructuring은 let으로도 선언할 수 있지만 따로 변수를
 * 선언하여 destructuring을 사용하는 방법으로는 destructuring에
 * `소괄호()`를 붙혀 따로 선언한 변수를 renmae으로 사용하는 것이다.
 * 그러면 선언한 변수는 rename에 들어가는 데이터로 값이 바뀐걸 볼 수
 * 있다.
 */
let chosenColor2 = "blue";
console.log(chosenColor2);

({
  color: { chosen_color: chosenColor2 = "light" },
} = settings);
console.log(chosenColor2);
