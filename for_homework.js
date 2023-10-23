// 1번문제 - 1부터 100까지 더하는 for문 만들고 결과 출력
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

// 2번문제 - 1부터 100까지 홀수만 출력
let j;
for(j=1; j<=100; j++){
    if(j%2==1){
        console.log(j)
    }
}

//강사님 답
for(let w=1; w<=100; w+=2){
    console.log(w);
}

// 3번문제 - 1부터 50까지 369결과를 프린트
for(let q=1; q<=50; q++){
    let stringValue = q.toString();
    let result = "";

    for(let e=0; e<stringValue.length; e++){
        if(stringValue[e] == "3" || stringValue[e] == "6" || stringValue[e] == "9"){
            result +="짝"
        }
    }
    console.log(result.length>0?result:q)
    // console.log(stringValue.length)

}

// 4번문제 - 주어진 숫자가 소수이면 true 아니면 false 출력하는 프로그램
let n = 6;
let isPrime = true;

if(n===1) {
    isPrime = false;
}

for(let x=2; x<n; x++){
    if(n%x==0){
        isPrime = false;
    }
}
console.log("이 수는"+isPrime)
