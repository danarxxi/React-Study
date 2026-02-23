// 1. if 조건문 (if문)
let num = 10;

//if로 시작해서 else로 끝내야함
if (num >= 10) {
    console.log("num은 10 이상입니다.");
}
else if(num >= 5) {
    console.log("num은 5 이상입니다.") //else if는 무한으로 추가할 수 있다.
}
else {
    console.log("조건이 거짓입니다.!")
}

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때  if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
    case "cat": {
        console.log("고양이");
        break; // switch문은 break를 달아줘야 해당되는 조건만 출력이 된다.
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    default: {
        console.log("그런 동물은 전 모릅니다."); //위에 정의되어 있는 케이스 외에 것을 입력할 때 출력하는 부분
    }
}