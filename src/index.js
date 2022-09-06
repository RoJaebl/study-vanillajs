const wrapper = document.querySelector(".wrapper");

/**
 * template literal이 없었던 ES6이전에는 html에 elements를 추가할때 아래와 같이 작성하였따.
 */
const addWelcome1 = () => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerText = "Hello1";
  h1.className = "sexyTitle";
  div.append(h1);
  wrapper.append(div);
};

setTimeout(addWelcome1, 1000);

/**
 * 백틱으로 html tag를 작성하고 넣기만하면 JS함수로 해줘야 했던 작업을 간단하게 건너뛸 수 있게 되었다.
 */
const addWelcome2 = () => {
  const div = `
  <div class="hello">
    <h1 class="title">Hello2</h1>
  </div>
  `;
  wrapper.innerHTML = div;
};
setTimeout(addWelcome2, 2000);
