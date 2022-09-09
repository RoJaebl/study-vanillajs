/**
 * array destructuring으로 손쉽게 변수를 서로 교환할 수 있다.
 * swap하고자하는 변수를 array를 만들고 destructuring을 이용하여
 * 값을 서로 바꾸는 것이다.
 * @decription
 * [sat, mon] = [mon, sat] => [sat, mon] = ["Sat", "Mon"]
 */
let mon = "Sat";
let sat = "Mon";

[sat, mon] = [mon, sat];

/**
 * array destructuring으로 array의 어느 중간 부분을 가지고 오고
 * 싶다면 array destructuring에 `콤마,`를 체워 원하는 위치를
 * 변수로 선언한다.
 */
const days = ["mon", "tue", "wed", "thu", "fir", "sat", "sun"];

const [, , , thu, fir] = days;
console.log(thu, fir);
