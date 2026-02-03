// 1.변수
let age;
age = 30;

// 2.상수: 변할 수 없는 값
const birth = "1999.02.12";

//3. 변수 명명규칙(네이밍 규칙)
//3-1. $, _ 제외한 기호를 사용할 수 없다.
let $_name;

//3-2. 숫자로 시작할 수 없다.
let name1; //가능
let $1name;

//3-3. 예약어를 사용할 수 없다.
//let let; 불가능

//4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b;

let salescount = 1;
let refundcount = 1;
let totalSalesCount = salescount - refundcount; // 이런 식으로 알아보기 쉬운 변수명이 좋음