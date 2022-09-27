/**
 * Generators를 사용하는 방법은 function뒤에 `*`을 달아주면 된다.
 * `yield`로 return과 비슷한 작업을 수행 할 수 있다.
 */
function* listPeople() {
  yield "Dal";
  yield "Flynn";
  yield "Mark";
  yield "Godkimchi";
  yield "Japan Guy";
}

/**
 * Generators를 호출하면 yield와 관련된 데이터가 출력되지 않는데
 * `.next()`를 호출하여 yield순서대로 지정한 데이터에 접근할 수 있다.
 */
const listG = listPeople();

/**
 * yield를 반복문안에 정의하여 다양한 방법으로 yield를 호출할 수 있다.
 */
const friends = ["Dal", "Flynn", "Mark", "Godkimchi", "Japan Guy"];
function* friendTeller() {
  for (const friend of friends) {
    yield friend;
  }
}
const friendLooper = friendTeller();
