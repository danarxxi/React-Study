//1. Number Type
let num1 = -27;
let num2 = 1.5;

//console.log(num1 - num2); 사칙연산 모두 지원

let inf = Infinity;
let ,Inf = -Infinity;

let nan = NaN; 

//2. String Type
let myName = "김다은"; //문자열은 큰,작은 따옴표로 꼭 둘러싸기
let myLocation = "서울";
let introduce = myName + myLocation;

//템플릿 리터럴 문법
//backtick을 이용해 동적인 변수 넣기 가능
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; 

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type (아무것도 없다)
let empty = null;

//5. Undefined Type
let none;
//console.log(none); //undifined라고 출력됨
