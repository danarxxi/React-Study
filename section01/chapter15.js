// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; //객체 리터럴 <- 대부분 이 방식을 사용

// 2. 객체 프로퍼티 (객체 속성)
// -> 프로퍼티의 갯수는 제한이 없음
// value에 들어올 수 있는 자료형의 타입에도 제한이 없음
let person = {
    name: "이정환", // key : value 형식으로 작성
    age: 27,
    hobby: "테니스",
    extra: {},
    10: 20,
    "like cat": true, // key 중간에 띄워쓰기를 넣고 싶은 경우에는 따옴표로 감싸야함
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
// -> 존재하지 않는 프로퍼티를 출력하려고 하면 undefined로 출력됨
let name = person.name;
console.log(name); // 이정환이 출력됨

let age = person["age"] //쌍따옴표 필수, 프로퍼티를 동적으로 변환시키면서 꺼내와야할 때 사용됨
console.log(age); //27이 출력됨

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 테니스로 출력됨

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제한느 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1); // 프로퍼티가 존재하므로 true로 출력됨