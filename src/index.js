/**
 * HTML과 연동되는 class를 작성하여 calss의 조직적이고 편리한
 * 기능을 체감해보도록 하자.
 *
 */
class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerText = initialNumber;
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListeners();
  }
  addEventListeners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  };
  /**
   * HTML element 함수로 호출된 함수는 일반함수로 사용할 경우
   * this의 형태가 class가 아닌 HTML element의 정보를 가져올
   * 것이다.
   * 이것은 JS의 기본동작이며 일반함수는 자신을 호출한 객체의
   * 정보를 this에게 전달하기 때문이다. 그렇기에 객체의 정보를
   * 전달하지 않는 arrow function으로 this를 class를 참조
   * 하도록 설정한다.
   * 그리고 앞으로 calss의 모든 function을 arrow function으로
   * 정의하는 것이 좋다.
   */
  increase = () => {
    this.count = this.count + 1;
    this.repaintCount();
  };
  decrease = () => {
    this.count = this.count - 1;
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerText = this.count;
  };
}

new Counter({ counterId: "count1", plusId: "add1", minusId: "minus1" });
new Counter({
  counterId: "count2",
  plusId: "add2",
  minusId: "minus2",
  initialNumber: 44,
});
