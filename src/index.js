/**
 * resolve는 JS에게 작업한 값을 전달하는 callback param이고
 * reject는 JS에게 에러를 알려주는 callback param이다.
 * @decription
 * Promise가 시작되면 JS는 호출되는 시점에서 값이 반환되기까지
 * 기다린다. 그리고 resolve를 실행시켜 함수를 완료한다.
 *
 * 아래 코드는 resolve로 promise반환을 정의하고 setInterval로
 * promise를 지속적으로 호출하여 결과값을 받는다.
 */
const amISexy = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, `Yes you are`);
});
/**
 * console.log로 amISexy의 setTimeout을 동작시키고 그다음
 * setInterval을 지속적으로 호출하여 setTimeout의 결과값을
 * 받아서 반환한다.
 */
console.log(amISexy);

setInterval(console.log, 1000, amISexy);
