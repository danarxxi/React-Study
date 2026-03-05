// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;


// 2. Truthy한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};

// 3. 활용 사례
function printName(person) {
    if (!person) {   // 원래는 (person === undifined || person === null) 로 작성해줘야 하는데 Truthy, Falsy 특성을 이용하여 간결하게 표현 가능
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = { name: "이정환"};
printName(person);