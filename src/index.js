const friends = ["nico", "lynn", "dar", "mark"];

for (let i = 0; i < 20; i++) {
  console.log("I love `Kimchi`");
}

for (let i = 0; i < friends.length; i++) {
  console.log(`${friends[i]} love \`Kimchi\``);
}

const addHeart = (...args) => console.log(args);
friends.forEach(addHeart);

/**
 * for of는 forEach와 다르게 string, array, NodeLists,
 * typed array, map, set에서 사용할 수 있다. forEach는
 * array에서만 사용이 가능하다. 또한 break 키워드를 사용하여
 * `원하는 위치까지 반복문을 실행`하고 빠져 나올 수 있다.
 */
for (const friend of friends) {
  if (friend === "dar") {
    break;
  } else {
    console.log(friend);
  }
}
