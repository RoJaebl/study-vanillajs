/**
 * value shorthands는 오브젝트의 요소값을 변수를 지정할때 요소의
 * 이름과 변수의 이름을 같게 사용하고 싶을때 사용한다.
 */
const follow = checkFollow();
const alert = checkAlert();

/**
 * 위의 변수이름을 아래 오브젝트 요소의 값으로 넣고있다.
 */
const settings1 = {
  notificationss: {
    follow: follow,
    alert: alert,
  },
};

/**
 * shorthand property를 이용하여 요소이름과 변수이름을 합쳐서
 * 요소이름과 값을 동시에 정의한다.
 */
const settings2 = {
  notificationss: {
    follow,
    alert,
  },
};
/**
 * 물론 요소이름을 변수이름과 다르게 하여 사용할 수 있다.
 */
const settings3 = {
  notificationss: {
    isFollow: follow,
    isAlert: alert,
  },
};
