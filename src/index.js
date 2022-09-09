/**
 * `spread ...`를 사용하여 array나 object를 해채하여 안의
 * 모든 요소들을 반환한다.
 */
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];
console.log([...family, ...friends]);

const sexy = {
  name: "nico",
  age: 24,
};

const hello = {
  sexy: true,
  hello: "hello",
};

console.log({ ...sexy, ...hello });
