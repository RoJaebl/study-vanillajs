/**
 * class를 정의하여 객체를 만든다
 */
class User1 {
  constructor() {
    this.username = "Nicolas";
  }
  sayHello() {
    console.log(`Hello, I'm Nicolas`);
  }
}
/**
 * class를 new를 통해서 만들어진 변수를 `인스턴스`라고 한다.
 */
const sexyUser1 = new User1();
const uglyUser1 = new User1();
sexyUser1.sayHello();
uglyUser1.sayHello();

/**
 * 사실 class 없이도 object정의만으로 class와 같은 동작을
 * 할 수 있다. 하지만 class가 좀더 직관적이고 체계적이고
 * 유지 보수가 훌륭하기도하며 객체지향적인 프로그램을 설계
 * 하는데에 있어 없어서는 안될 추상적 개념이다.
 */
const baseObject = {
  username: "Nicolas",
  sayHello: function () {
    console.log("Nicolas");
  },
};

const sexyUser2 = baseObject;
const uglyUser2 = baseObject;
sexyUser2.sayHello();
uglyUser2.sayHello();

/**
 * 객체생성에 인수를 주어 class 내부맴버의 초기값을 넣을 수
 * 있고 this라는 키워드를 사용하여 class로 생성한 인스턴스
 * 마다 정의된 맴버를 독립적으로 컨트롤 할 수 있다.
 */
class User3 {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    return `Hello, my name is ${this.username}`;
  }
}

const sexyUser3 = new User3("Nico");
console.log(sexyUser3.sayHello());
