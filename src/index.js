/**
 * killPassword의 정의를 `desturcturing과 rest을 이용`하여 password
 * 요소를 제외하고 오브젝트를 반환한다.
 * @description
 * `desturcturing + rest`
 */
const user = {
  name: "nico",
  age: 24,
  password: 12345,
};

user["password"] = null;
console.log(user);

const killPassword = ({ password, ...args }) => args;
const cleanUser = killPassword(user);
console.log(cleanUser);

/**
 * 이번엔 desturcturing default value와 rest, spread르 이용하여
 * 오브젝트 요소를 추가하였다.
 */
const setCountry = ({ country = "KR", ...args }) => ({ country, ...args });

console.log(setCountry(user));
console.log(setCountry({ country: "US", user }));
console.log(setCountry({ country: "US", ...user }));

/**
 * 위의 예제에서 renamming을 추가한 하였다.
 */
const rename = ({ name: Name, ...args }) => ({ Name, ...args });

console.log(rename(user));
