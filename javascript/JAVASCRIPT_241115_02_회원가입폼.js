// 1) 유효성 검사 추가

// 2) 실시간 유효성 검사 메시지 출력
// 각 입력 필드 아래에 실시간으로 유효성 검사 결과를 표시
// 입력 조건이 맞을 경우 "사용 가능 합니다."라고 초록색으로 표시
// 조건이 맞지 않을 경우 "입력 조건이 맞지 않습니다."라고 빨간색으로 표시

function validateId() {
  const id = document.getElementById("id").value;
  // 아이디는 영문자, 숫자, 밑줄만 포함할 수 있으며, 8자 이상 20자 이하
  const regexId = /^[\w]{8,20}$/;
  const pId = document.querySelector("#pId");
  const validId = regexId.test(id);
  if (id === "") {
    pId.style.display = "none";
  } else if (validId) {
    pId.style.display = "block";
    pId.textContent = "사용 가능한 아이디입니다.";
    pId.style.color = "green";
  } else {
    pId.style.display = "block";
    pId.textContent = "입력 조건이 맞지 않습니다.";
    pId.style.color = "red";
  }
  validateForm();
}

function validatePw() {
  const pw = document.getElementById("pw").value;
  // 비밀번호는 영문 대소문자, 숫자, 특수문자를 모두 포함하여 8자 이상
  const regexPw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const pPw = document.querySelector("#pPw");
  const validPw = regexPw.test(pw);
  if (pw === "") {
    pPw.style.display = "none";
  } else if (validPw) {
    pPw.style.display = "block";
    pPw.textContent = "사용 가능한 비밀번호입니다.";
    pPw.style.color = "green";
  } else {
    pPw.style.display = "block";
    pPw.textContent = "입력 조건이 맞지 않습니다.";
    pPw.style.color = "red";
  }
  validateForm();
}

function validateMail() {
  const mail = document.getElementById("mail").value;
  // 이메일은 올바른 이메일 형식
  // @ 앞부분은 영문자, 숫자, ., _, %, +, - 기호 포함 가능, 하나 이상 와야 함
  // @ 기호 반드시 포함
  // @ 뒷부분은 영문자, 숫자, ., - 기호 포함 가능, 하나 이상 와야 함
  // 확장자 부분은 . 뒤에 2자 이상의 영문자가 와야 함, 자릿수 제한 없음
  // 대소문자 구분 없음
  const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  const pMail = document.querySelector("#pMail");
  const validMail = regexMail.test(mail);
    if (mail === "") {
    pMail.style.display = "none";
  } else if (validMail) {
    pMail.style.display = "block";
    pMail.textContent = "사용 가능한 이메일입니다.";
    pMail.style.color = "green";
  } else {
    pMail.style.display = "block";
    pMail.textContent = "입력 조건이 맞지 않습니다.";
    pMail.style.color = "red";
  }
  validateForm();
}

function validatePhone() {
  const phone = document.getElementById("phone").value;
  // 전화번호는 010-1234-5678 형식
  const regexPhone = /^010-\d{4}-\d{4}$/;
  const pPhone = document.querySelector("#pPhone");
  const validPhone = regexPhone.test(phone);
    if (phone === "") {
    pPhone.style.display = "none";
  } else if (validPhone) {
    pPhone.style.display = "block";
    pPhone.textContent = "사용 가능한 전화번호입니다.";
    pPhone.style.color = "green";
  } else {
    pPhone.style.display = "block";
    pPhone.textContent = "입력 조건이 맞지 않습니다.";
    pPhone.style.color = "red";
  }
  validateForm();
}

// 3) 가입 요청 버튼 활성화 조건
// 모든 입력 필드가 올바르게 입력된 경우에만 "가입 요청" 버튼이 활성화

function validateForm() {
  const validId = /^[\w]{8,20}$/.test(document.getElementById("id").value);
  const validPw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(document.getElementById("pw").value);
  const validMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(document.getElementById("mail").value);
  const validPhone = /\d{3}-\d{4}-\d{4}/.test(document.getElementById("phone").value);
  const button = document.getElementById("button");

  if (validId && validPw && validMail && validPhone) {
    button.disabled = false;
    button.style.background = "#3579f6";
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
    button.style.background = "#333333";
    button.style.cursor = "not-allowed";
  }

}

// 4) 스타일 수정
// 폼의 전체적인 디자인을 사용자가 보기 편하고 모던하게 수정
// 입력 필드에 포커스가 갔을 때, 파란색 테두리가 생기도록
// 버튼은 모든 조건이 충족되었을 때만 파란색으로 활성화
// 그렇지 않을 때는 회색으로 비활성화 상태로 유지됩니다.

// 추가 과제 (선택 사항)
// 회원 가입 폼에 애니메이션 효과를 추가
// 예를 들어, 입력 필드가 포커스될 때 부드러운 전환 효과를 추가
// 반응형 디자인을 구현하여 모바일 화면에서도 폼이 적절하게 보이도록 수정

