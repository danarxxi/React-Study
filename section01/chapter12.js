// 1. 함수 표현식

function funcA() {
    //console.log("funcA");
}

let varA = funcA;
varA(); //funcA가 출력

//함수 표현식으로 만든 함수들은 값으로써 취급이 되기 때문에 호이스팅이 적용되지 않음
let varB = function () { //함수 이름을 따로 적지 않아도 문제없음, 익명함수
    //console.log("funcB");
};

varB(); //funcB로 출력

// 2. 화살표 함수
let varC = () => {
    return 1;
};

// let varC = () => 1; 이렇게 더 간결하게도 사용 가능
console.log(varC());

// let varC = (value) => 1; 매개변수가 필요하다면 이렇게 선언해서 사용하면 됨
// let varC = (value) => value + 1;
console.log(varC(10)); // 11로 출력

// 안에 더 추가적인 작업도 추가 가능
let varD = (value) => {
    console.log(value);
    return value + 1;
};