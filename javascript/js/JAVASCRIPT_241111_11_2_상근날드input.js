// prompt로 연속해서 햄버거 3개의 가격과 음료 2개의 가격을 입력받음
// 햄버거 3개 중 가장 싼 가격을 선택하고, 음료 2개 중 가장 싼 음료의 가격을 선택 및 합산 후 50원 할인
// 결과를 웹하면에 예쁘게 출력
// 번외 : input 태그로 변경해보기


function getPrice() {
  let menu = [];

  for (let i = 0; i < 5; i++) {
    menu[i] = Number(document.getElementById("menu" + (i + 1)).value);
    console.log(menu[i]);
  }

  let minB = menu[0];
  let minD = menu[3];
  for (let i = 0; i < menu.length; i++) {
    if (i < 3 && minB > menu[i]) minB = menu[i];
    if (i > 2 && minD > menu[i]) minD = menu[i];
  }
  document.getElementById("value").innerHTML = minB + minD - 50 + "원";
}