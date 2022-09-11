/**
 * then으로 전달된 인수는 promise에 처리한 resolve와 recject의
 * 값을 전달 받는다.
 */
const amISexy1 = new Promise((resolve, reject) => {
  resolve(`Yes you are!`);
});

amISexy1.then((value) => console.log(value));

/**
 * reject만 쓰이면 JS에서 에러를 반환한다. 그렇기에 에러를
 * catch하여 에러에 관한 처리소스를 구현해야한다. 여기서 then과
 * catch가 함수로 보여서 then실행 후 cath가 실행되는거라 생각
 * 되지만, 실상 두 함수는 서로 각각 동작을 한다.
 * JS는 다른작업이 딜레이걸리면 다른 작업을 실행하는 시스템
 * 이기에 함수 디자인을 JS시스템을 고려하여 구현해야한다.
 */
const amISexy2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, `Yes are ugly`);
});

amISexy2.then((result) => console.log(result)).catch((err) => console.log(err));
