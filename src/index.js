/**
 * object로 함수 인자로 전달하는 것은 매우 불안정 하다. 전달된 인수의
 * 요소를 가지고 기능을 구현한다는 가정하에 함수를 호출하는데 해당
 * 요소가 없다면 에러가 발생할 것이다.
 */
function saveSettings1(settings) {
  if (!settings.mrkAler) {
  }
  const saveColor = (color) => {};
  saveColor(settings.themeColor);
}
saveSettings1({
  followAlert: true,
  unfollowAlert: true,
  mrkAler: true,
  themeColor: "green",
});

/**
 * 이처럼 불명확한 인수대신 명확하고 가독성이 좋으며 기본값도 설정
 * 가능한 function destructureing을 사용하게 된다.
 */
function saveSettings2({ follow, alert, color = "blue" }) {
  console.log(color);
}
saveSettings2({
  follow: true,
  alert: true,
});

function saveSettings3({ notifications, color: { theme } }) {
  console.log(theme);
}
saveSettings3({
  notifications: {
    follow: true,
    alert: true,
    mkt: false,
  },
  color: {
    theme: "dark",
  },
});
