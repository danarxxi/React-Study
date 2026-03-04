// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; //  배열 리터럴 (대부분 사용)

let arrC = [ // 배열 안에는 어떤 형식을 써도 상관없고, 길이도 상관없다
    1,
    2,
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];

// 2. 배열 요소 접근
let item1 = arrC[0]; // 0 같은 숫자를 인덱스라고 함
let item2 = arrC[1];

console.log(item1, item2);

// 값을 바꿀 때는 해당하는 값을 다시 정의해주면 됨
arrC[0] = "hello";
console.log(arrC); //바뀐 값으로 출력됨