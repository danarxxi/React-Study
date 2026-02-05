// 1.대입 연산자
let var1 = 1;

// 2.산술 연산자
let num1 = 3 + 2;

let num5 = 1 + 2 * 10; //곱셈, 나눗셈 연산자가 덧셈, 뺄셈 연산자보다 우선 순위가 높다.

let num6 = (1 + 2) * 10; //우선순위로 두고 싶은 곳을 괄호로 묶으면 먼저 계산 됨

//3. 복합 대입 연산자 (모든 연산자 적용 가능)
let num7 = 10;
num7 += 20;
//console.log(num7); 30으로 출력됨
num7 -= 20;
//console.log(num7); 10으로 출력됨

// 4. 증감 연산자
let num8 = 10;
num8++; //(후위연산)
++num8; //(전위연산)
//즉시 결과를 출력하고 싶을 경우 변수 앞에다가 증감 연산자 붙이거나 복합 대입 연산자 사용하기

// 5. 논리 연산자
let or = true || false;  //true로 출력

let and = true && false;  //false로 출력

let not = !true;  //false로 출력

// 6. 비교 연산자
let comp1 = 1 === 2; //false로 출력, === 세 번 쓰는 이유는 값 뿐만 아니라 자료형까지 비교하기 위함
let comp2 = 1 !== 2; //true로 출력

let comp3 = 2 > 1; //true로 출력

let comp5 = 2 >= 2; //true로 출력