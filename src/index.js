/**
 * ES6전 object요소를 사용하기위해 if문에 변수의 요소를 접근하는 방식을 사용했다.
 * @exampl
 * if(settings1.notifications.follow1){
 * send email code...
 * }
 */
const settings1 = {
  notifications1: {
    follow1: true,
    alerts: true,
    unfollow: false,
  },
  color1: {
    theme: "dark",
  },
};

if (settings1.notifications1.follow1) {
  // send email
}

/**
 * destructuring을 사용하면 아래와 같이 변수를 오브젝트 형식으로 선언하고
 * object요소 이름을 변수로 사용한다.
 * @decription
 * destructuring의 변수가 되는 기준은 마지막 요소이다.
 */
const {
  notifications1: { follow1 },
  color1,
} = settings1;

console.log(color1);

/**
 * settings2에 notifications이 없다면 `one-line-statement`를 이용하여
 * notifications를 defualt value를 만들고 follow를 default값을 준다.
 * settings2에 notifications라는 object가 없어도 destructuring이
 * 되는걸 볼 수 있다.
 * @exsampl
 * const { notifications: { follow = true } = {} } = settings2;
 */
const settings2 = {
  color: {
    theme: "dark",
  },
};
const { notifications = { alerts: true } } = settings2;
console.log(notifications);
