// for반복문, for (초기식; 조건식; 증감식)
for (let idx = 0; idx < 10; idx++) {
    if(idx & 2 === 0) {  
        continue;  //idx가 짝수일 경우에는 아래를 실행하지 않고 다음 회차로 넘어가는 코드
    }
    console.log("반복!");

    if (idx >= 5) {
        break; //5 이상일 떄 break하도록
    }
}