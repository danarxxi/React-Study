// 1. 단락 평가
function returnFalse() {
    console.log("False 함수");
    return undefined;
}

function returnTrue() {
    console.log("True 함수");
    return 10;
}

console.log(returnTrue() || returnFalse()); // True 함수, 10 으로 출력
console.log(returnFalse() && returnTrue()); // False 함수, undefined로 출력

// 2. 단락 평가 활용 사례
// 아래처럼 복잡한 구문을 단락평가를 이용해 간략하게 표현 가능하다
function printName(person) {
    if (!person) {
        console.log("person에 값이 없음");
        return;
    }
    console.log(person.name);
}

// 이런 식으로 단락평가를 이용해 위의 구문을 간략하게 표현 가능
function printName(person) {
    console.log(person && person.name);
}