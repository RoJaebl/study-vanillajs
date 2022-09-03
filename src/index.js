/**
 * 객체가 정의한 함수내에서 this를 사용하면 인스턴스의 정보를 가져올 수 있다.
 */
const button1 = document.querySelector("button");

button1.addEventListener("click", function () {
  console.log(this);
  this.style.backgroundColor = "tomato";
});

/**
 * arrow function으로 callback 인수로 전달하면 this는 Window정보를 가져온다.
 */
const button2 = document.querySelector("button");

button2.addEventListener("click", () => {
  console.log(this);
  this.style.backgroundColor = "tomato";
});

/**
 * 어떠한 정의로든 arrow function으로 객체의 정보를 담을 수 없다.
 */
const person1 = {
  name: "Nico",
  age: 24,
  addYear: () => {
    this.age++;
  },
};

console.log(person1);
person1.addYear();
person1.addYear();
console.log(person1);

const person2 = {
  name: "Nico",
  age: 24,
  addYear: function () {
    this.age++;
  },
};

console.log(person2);
person2.addYear();
person2.addYear();
console.log(person2);
