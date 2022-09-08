/**
 * Array destructuring를 사용하기전 array 앞 세개의 값을 가져오기 위해선
 * 아래와 같이 코드를 구현해야 했었다.
 */
const days1 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const day = days1.filter((day, index) => {
  return index < 3 ? true : false;
});
console.log(day);

/**
 * Array destructuring를 사용하는 이후로 전달된 array 요소 갯수 이하만큼
 * 원하는 값을 변수를 선언하여 사용할 수 있다.
 * 물론 default value도 넣어서 array에 없는 값을 변수를 선언하여 사용할 수 있다.
 */
const days2 = ["Mon", "Tue", "Wed"];
const [mon2, tue2, wed2, thu2 = "Thu"] = days2;
console.log(mon2, tue2, wed2, thu2);
/**
 * 일반함수나 arrow function으로도 array destructuring을 사용할 수 있다.
 */
const days3 = () => ["Mon", "Tue", "Wed"];
const [mon3, tue3, wed3, thu3] = days3();
console.log(mon3, tue3, wed3, thu3);
