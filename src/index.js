/**
 * Proxy는 filter처럼 생각할 수 있다. Proxy객체는 object와 그 object를
 * 제어하는 헨들러 인수를 받는다. 그리고 아래 처럼 핸들러 역할을 할 object를
 * 비워두고 `filteredUser`변수를 object propety를 호출하는거첨 접근하면
 * object값을 받아 올 수 있다.
 */
const userObj = {
  username: "nico",
  age: 12,
  password: 1234,
};
const userFilter1 = {};
const filteredUser1 = new Proxy(userObj, userFilter1);

/**
 * 하지만 헨들러 역할을 하는 object에 get과 set을 정의하여 변수에 요소접근을
 * 시도하면 get이 호출이되고 변수에 요소를 새롭게 정의하면 set이 호출이된다.
 * 물론 새로 정의한 요소도 추가되지 않는걸 확인할 수 있다.
 * 기본적으로 proxy객체의 요소를 가지고 오는 방법은 get에 다음과 같이 정의하여
 * 가지고 오는 방법을 한다. `return target[prop];` 또한 삼항 연산자나 다른
 * 정의로 요소를 가공하여 출력할 수도 있고 데이터를 변형시킬 수 있다.
 */
const userFilter2 = {
  get: (target, prop, receiver) => {
    return prop == "password" ? `*`.repeat(5) : target[prop];
  },
  set: () => {
    console.log(`Somebody wrote something`);
  },
  deleteProperty: (target, prop) => {
    if (prop == "password") {
      return;
    } else {
      target[prop] = "DELETE";
    }
  },
};
const filteredUser2 = new Proxy(userObj, userFilter2);
