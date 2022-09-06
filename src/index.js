const wrapper = document.querySelector(".wrapper");

/**
 * 한가지 예제로 아래와 같이 array value를 백틱을 이용하여 손쉽게 HTML form을 작성할 수 있다.
 * reactJS의 JSX도 백틱에서 파생된 syntax라는걸 알 수 있다.
 */
const friends = ["me", "lynn", "dal", "mark"];

const list = `
        <h1>People i love</h1>
        <ul>
            ${friends.map((friend) => `<li>${friend}</li>`).join("")}
        </ul>
`;

wrapper.innerHTML = list;
