//1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str ="20";

const result = num + str; //숫자를 문자열로 묵시적 변환
//console,log(result); //1020으로 출력

//2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
//console.log(10 + strToNum1); //20으로 출력

let str2 = "10개";

//let strToNum2 = Number(str2);
//console.log(strToNum2); //NaN으로 출력

let strToNum2 = parseInt(str2); //문자열이 앞에 포함된 경우 변환 안 됨, 숫자가 앞에 있어야함
//console.log(strToNum2); //10으로 출력

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
//console.log(numToStr1 + "입니다.") //20입니다.로 출력