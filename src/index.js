/**
 * 이전 User class의 기능을 확장하여 아래와 같이 함수를 정의하였다.
 * 이처럼 class는 확장 및 유지보수도 쉽고 코드가 더 늘었음에도 정돈된
 * 모습을 볼 수 있다.
 */
class User {
  constructor(name, lastName, email, password) {
    this.username = name;
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

const sexyUser = new User("Nico", "Serrano", "nico@com", "1234");

sexyUser.getProfile();
console.log(sexyUser.password);

sexyUser.updatePassword("hello", "111111");
console.log(sexyUser.password);

/**
 * 이번엔 User class를 확장하여 Admin class를 정의한 것이다. 여기서
 * Admin은 User본연의 기능을 유지하면서 Admin만이 가지는 기능을 정의한다.
 */
class Admin extends User {
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const sexyAdmin = new Admin("Nico", "Serrano", "nico@com", "1234");
sexyAdmin.deleteWebsite();
console.log(sexyAdmin.email);
