// 1. 배열의 구조 분해 할당
let arr = [1,2,3];
// 아래처럼 식으로 하나식 분배하는 방법도 있지만 코드가 길어지고 귀찮음
//let one = arr[0];
//let two = arr[1];
//let three = arr[2];

// 한번에 분배 가능
let [one, two, three, four = 4] = arr; // 이런 식으로 없는 변수도 값 설정해서 추가 가능함

// 2. 객체의 구조 분해 할당
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
};

// 원래는 아래처럼 이런 식으로 변수를 하나씩 할당해야함
//let name = person.name;

// 한번에 변수 할당 가능
let { name, age: myAge, hobby, extra = "hello", } = person; // 이런 식으로 없는 변수도 값 설정해서 추가 가능함
// age: myAge 같이 프로퍼티 변경하고 싶을 경우에 이런 식으로 가능

// 3. 객체의 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra);
};

func(person);