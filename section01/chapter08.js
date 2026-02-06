// 1.null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1; //undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; //2개 값 중 null, undefined가 아닌 값을 넣어줌, 10으로 출력됨
let var5 = var1 ?? var3; //20으로 출력됨
let var6 = var2 ?? var3; //2개 다 정의된 값이라면 처음 값이 출력됨, 10으로 출력

// 2.typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello"; //변수 타입이 고정되어있지 않아서 계속 바꾸기 가능

let t1 = typeof var7; //var7의 값이 문자열이기 때문에 string으로 출력, number, boolean 등도 출력 가능

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자, 보통은 1개 혹은 2개 사용함
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

//요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수"; //짝수로 출력