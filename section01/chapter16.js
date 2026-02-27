// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; //추가하는 것 가능
animal.name = "까망이"; // 수정하는 것 가능
delete animal.color; // 삭제하는 것 가능

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "이정환",
    sayHi : function () {
        console.log("안녕!");
    },
};

//화살표 함수로도 만들 수 있음
const person2= {
    name: "이정환",
    sayHi : () => {
        console.log("안녕!");
    },
};

// 더 단축된 형태로도 만들 수 있음
const person3= {
    name: "이정환",
    // 메서드 선언이라고 함
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi(); //안녕! 을 출력
person["sayHi"](); // 괄호 표기법으로도 호출 가능