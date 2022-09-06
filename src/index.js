const styled1 = (css) => console.log(css);

/**
 * template literal의 또 다른 기능은 함수이름 앞에 백틱을 써주어서
 * 인자로 바로 전달하게 하는 기능이다. 다른말로 백틱은 ()로도 표현이 되는 것이다.
 */
styled1`border-radius:10px;
color:blue`;

/**
 * thml tag 이름을 전달하여 html tag를 생성할 수 있지만
 * 바로 이어서 백틱으로 css스타일을 넣게 된다면 에러가 발생한다.
 * 스타일도 추가로 넣기위해 내부함수를 추가해줘야 한다.
 * @example
 * const title = styled2("h2")`color:red`;
 * // const title = styled2("h2")("color:red");
 * @param {htmlTag} aElement htmlTag 이름을 넣는다.
 * @returns htmlTag가 생성된다.
 */
const styled2 = (aElement) => {
  const el = document.createElement(aElement);
  return el;
};
const title2 = styled2("h1");
console.log(title2);

/**
 * 함수의 함수를 사용하는 방법은 아래와 같이 하면 위와 같은 에러를 해결할 수 있다.
 * 그리고 함수의 정의를보면 함수의 반환값이 함수이고 그 반환된 함수로 백틱인자가
 * 전달되는 것이다.
 * 이것이 react가 작동하는 방식이다.
 */
const styled3 = (aElement) => {
  const el = document.createElement(aElement);
  return (args) => {
    const styles = args[0];
    el.style = styles;
    return el;
  };
};
const title3 = styled3("h1")`
background-color : red;
color:blue;`;
const subTitle = styled3("span")`
color:teal;
`;

title3.innerText = `We just cloned`;
subTitle.innerText = `Styled Components`;
document.body.append(title3, subTitle);
