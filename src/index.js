/**
 * Rest는 단지 함수 파라미터에 spread랑 같은 문법인 `...`을 넣으면 된다.
 * 제공된 인수가 여러개일때 인수를 array로 변환하여 사용한다.
 */
const infiniteArgs = (...args) => console.log(args);

infiniteArgs("1", 2, true, "alala", [1, 2, 3, 4]);

const bestFriendMaker = (firstOne, ...args) => {
  console.log(`My best friend is ${firstOne}`);
  console.log(args);
};

bestFriendMaker("nico", "lynn", "dal", "mark");
