// JSON 데이터
const jsonData = `
[
    {
        "name": "PHAM HANNI",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "기타"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "KIM MINJI",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "운동", "가이드"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "KANG HAERIN",
        "age": 18,
        "isStudent": true,
        "courses": ["음악", "댄스", "고양이"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    }
]
`;

// 역직렬화를 해야 함 (JSON 데이터를 다시 객체로 만드는 것)
const jsonObject = JSON.parse(jsonData)
console.log(jsonObject);

// JavaScript 객체를 JSON 문자열로 변환 (직렬화)
const jsonString = JSON.stringify(jsonObject, null, 4);
console.log("다시 JSON으로 변환된 데이터:", jsonString);

const container = document.querySelector("#container");

// 백틱으로 해당하는 변수를 화살표 함수에 직접 넣기
// 안에 연산자도 들어감 (삼항연산자)
// join()으로 여러 문자열을 콤마와 띄어쓰기로 이어주기
const htmlContent = jsonObject.map( (person) => `
  <div class="person">
    <h2 style="color: orange; text-align: center; margin-bottom: 30px;">${person.name}</h2>
    <p><span style="color: orange; font-weight: bold;">나이    </span>${
      person.age
    }</p>
    <p><span style="color: orange; font-weight: bold;">학생 여부    </span>${
      person.isStudent ? "예" : "아니오"
    }</p>
    <p><span style="color: orange; font-weight: bold;">과목    </span>${person.courses.join(
      ", "
    )}</p>
    <p><span style="color: orange; font-weight: bold;">주소    </span>${
      person.address.city
    }</p>
    <p><span style="color: orange; font-weight: bold;">우편번호    </span>${
      person.address.zipcode
    }</p>
    </div>
  `
  )
  .join("");


  // htmlContent는 JSON 데이터를 HTML 구조로 변환한 문자열
  // container.innerHTML = htmlContent;는 이 문자열을 #container 요소의 HTML 내용으로 설정해, 변환된 HTML을 페이지에 표시
  // container.innerHTML을 설정하지 않으면, htmlContent가 #container에 표시되지 않음 (단순히 메모리에 저장된 상태일 뿐, 페이지에 변화 없음)
  container.innerHTML = htmlContent;