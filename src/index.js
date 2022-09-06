/**
 * @description includes
 * 제공된 인수가 객체에 포함하는지 검사하는 함수이다. 있으면 true, 아니면 false반환
 */
const isEmail = (email) => email.includes("@");
console.log(isEmail(`nico@nomadcoders.co`));

/**
 * @description repaet
 * 반복하고자하는 string을 생성하는 함수이다.
 * @example
 * "*".repeat(10)
 * // "**********"
 */
const CC_NUMBER = "6060";
const displayName = `${"*".repeat(10)}${CC_NUMBER}`;
console.log(displayName);

/**
 * @description `startsWith`
 * 제공된 인수가 string의 처음시작하는 부분과 맞으면 true, 아니면 false반환
 * 보통 유효성 검사에 많이 쓰이며 `endsWith` 함수도 함께 있다.
 */
const name = `Mr. Nicolas`;
console.log(name.startsWith("Mr"));
