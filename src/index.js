/**
 * arrow function으로 코드를 이쁘게 짜는 예제소스이다.
 */
const emails = [
  "nco@no.com",
  "naver@google.com",
  "lynn@gmail.com",
  "nico@nomad.com",
  "nico@gmail.com",
];

/**
 * find
 * 제공된 인수가 조건부 참이면 처음 찾은 요소를 반환
 */
const foundMail = emails.find((item) => item.includes("@gmail.com"));
console.log(foundMail);

/**
 * filter
 * 제공된 인수가 조건부 참이면 새로운 배열 생성
 */
const noGmail = emails.filter((email) => !email.includes("@gmail"));
console.log(noGmail);

/**
 * forEeach
 * 제공된 인수만큼 인수의 요소를 차례로 접근
 */
const cleaned1 = [];
emails.forEach((email) => {
  cleaned1.push(email.split("@")[0]);
});
console.log(cleaned1);

/**
 * map
 * forEach와 같이 제공된 인수만큼 인수의 요소에 차례로 접근한다.
 * 또한 주어진 조건에 맞추어 새로운 배열을 생성한다.
 */
const cleaned2 = emails.map((email) => email.split("@")[0]);
console.log(cleaned2);
/**
 * 추가로 오브젝트형태로 배열을 반환하는 방법은 아래와 같다
 * @description 오브젝트 형태인 {}로 생성해야하지만 JS규칙으로 return을 사용해야하는 scope로 되어버린다.
 * @example const cleaned3 = emails.map((email, index) => {username: email.split("@")[0], index;});
 * @description 그래서 오브젝트를 반환하기위해 대괄호로 오브젝트를 품으면 오브젝트로 배열이 만들어진다.
 */
const cleaned3 = emails.map((email, index) => ({
  username: email.split("@")[0],
  index,
}));
console.table(cleaned3);
