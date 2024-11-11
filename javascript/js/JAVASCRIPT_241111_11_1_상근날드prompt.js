let menu = [];
menu[0] = Number(prompt("버거 1 가격 : ", ""));
menu[1] = Number(prompt("버거 2 가격 : ", ""));
menu[2] = Number(prompt("버거 3 가격 : ", ""));
menu[3] = Number(prompt("음료 1 가격 : ", ""));
menu[4] = Number(prompt("음료 2 가격 : ", ""));

let minB = menu[0];
let minD = menu[3];
for (let i = 0; i < menu.length; i++) {
  if (i < 3 && minB > menu[i]) minB = menu[i];
  if (i > 2 && minD > menu[i]) minD = menu[i];
}
document.getElementById("value").innerHTML = minD + minB - 50 + "원";
