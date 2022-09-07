const friends1 = [
  "nico@gmail.com",
  "lynn@naver.com",
  "dal@yahoo.com",
  "mark@hotmail.com",
  "flynn@gorea.com",
];

/**
 * find는 처음 true로 트리거된 요소를 반환한다.
 */
const target1 = friends1.find((friend) => friend.includes("@gorea.com"));
console.log(target1);

/**
 * findIndex는 처음 true로 트리거된 요소의 인덱스 위치를 반환한다.
 * 아래는 @gorea.com을 찾아서 @korea.com으로 데이터를 변환하는 소스이다.
 */
const check1 = () =>
  friends1.findIndex((friend) => friend.includes("@gorea.com"));
let target2 = check1();

if (target2 !== -1) {
  console.log(target2);

  const username = friends1[target2].split("@")[0];
  const email = "korea.com";
  friends1[target2] = `${username}@${email}`;
  target2 = check1();
}

console.log(target2);

/**
 * fill은 첫번째 주어진 인수로 array를 새롭개 생성하는 함수이다.
 */
const friends2 = [
  "nico@gmail.com",
  "lynn@naver.com",
  "dal@yahoo.com",
  "mark@hotmail.com",
  "flynn@gorea.com",
];
const check2 = () =>
  friends2.findIndex((friend) => friend.includes("@gorea.com"));
let target3 = check2();

if (target3 !== -1) {
  friends2.fill("*".repeat(5), target3);
}

friends2.fill("*".repeat(5), 1, 3);

console.log(friends2);

/**
 * includes는 전달된 인자가 array에 있으면 true, 없으면 false를 반환한다.
 * 주로 array에 해당 인자가 있는지 확인할 때 쓰인다.
 */
console.log(friends2.includes("nico@gmail.com"));
