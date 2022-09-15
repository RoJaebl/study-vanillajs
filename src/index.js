class User {
  constructor({ username, lastName, email, password }) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.username}`);
  }
  getProfile() {
    console.log(`${this.username} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword == this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password.");
    }
  }
}

const sexyUser = new User({
  username: "Nico",
  lastName: "Serrano",
  email: "nico@com",
  password: "1234",
});

/**
 * 자식 class안에 생성자를 다시 정의하면 부모 class의
 * 생성자를 잃게 된다. 부모 생성자도 사용하기 위해서는
 * 자식 class 생성자안에 `super()`라는 함수를 호출한다.
 * `super()`함수는 부모 class의 생성자를 호출한다.
 */
class Admin extends User {
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const admin = new Admin({
  username: "Nico",
  lastName: "Serrano",
  email: "nico@com",
  password: "1234",
  superAdmin: true,
  isActive: true,
});
