/**
 * 작성한 소스코드
 */
console.log(name);
// < undefined
var name = "JavaScript";

/**
 * 인터프리터된 소스코드
 * hoisting으로인해 아래와 같은 코드로 변역되어 실행이 되는것이다.
 * 결국 console은 데이터가 없고 선언만 된 변수를 출력하는 결과를 낳는다.
 */
var name;
conseloe.log(name);
// < undefined
name = "JavaScript";
