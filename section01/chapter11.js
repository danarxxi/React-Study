// 함수선언

function greeting () {
    console.log("안녕하세요!");
}

console.log("호출 전");
greeting(); //함수 호출할 때 소괄호를 꼭 작성해줘야한다.
console.log("호출 후");

//직사각형 만드는 함수
function getArea (width, height) {
    let area = width * height;

    console.log(area);
}

getArea(10, 20); //200출력
getArea(120, 200);

function getArea (width, height) {
    function another() {  //함수 안에 함수를 또 만들 수 있음 (중첩 함수)
        console.log("another");
    }

    another();
    let area = width * height;

    return(area); //반환값, return을 하게 되면 return 이후의 코드는 수행되지 않음
}

let area1 = getArea(10, 20); //area1라는 변수에 200이라는 값이 저장이 됨

//호이스팅
// -> 끌어올리다 라는 뜻
// 선언하기 전에 호출해도 문제없이 실행됨