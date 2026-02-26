// 1. 콜백함수
function main(value) {
    console.log(1);
    console.log(2);
    value();   // 콜백 함수는 이런 식으로 main 함수가 원하는 타이밍에 실행시킬 수 있음
    console.log("end");   
}

function sub() {
    console.log("i am sub");
}

main(sub); //sub 함수 자체를 인수로 넣는 것 가능

// 9~13줄은 이렇게 함수 자체를 인수로 넣어서 쓰는 것도 가능함
main(function (){
    console.log("i am sub");
});
// 화살표 함수로 표현하는 것ㄷ 가능
main(() => {
    console.log("i am sub");
});

// 2.콜백 함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

//콜백함수를 이용해 1,2,3,4,5 출력
repeat(5, function (idx) {
    console.log(idx);
});
//콜백함수를 이용해 반복 코드 없이 2,4,6,8,10 출력
repeat(5, function (idx) {
    console.log(idx * 2);
});
//콜백함수를 이용해 반복 코드 없이 3,6,8,12,15 출력
repeat(5, function (idx) {
    console.log(idx * 3);
});

//화살표함수를 이용해 더 단순하게도 표현 가능
repeat(5, (idx) => {
    console.log(idx);
});