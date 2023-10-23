// 1번문제 - "안녕 내 이름은 제시카야"라는 문장 출력 함수
function greet() {
    console.log("안녕 내 이름은 제시카야");
}
greet();

// 2번문제 - 이름을 매개변수로 전달받아 다양한 이름 프린트
// function changeName(name){
//     console.log("안녕 내 이름은 " + name + "이야");
// }
// changeName("이해준");

// 3번문제 - 매개변수로 전달받은 이름을 반환하게 함수를 수정
function changeName(name) {
    console.log("안녕 내 이름은 " + name + "이야");
    return name;
}
let name = changeName("멍멍");

// 4번 문제
function meetAt(year, month, date) {
    let todayYear = year;
    let todayMonth = month;
    let todayDate = date;

    if (todayDate) {
        return `${todayYear}/${todayMonth}/${todayDate}`;
    } else if (todayMonth) {
        return `${todayYear}` + "년" + `${todayMonth}` + "월";
    } else if (todayYear) {
        return `${todayYear}` + "년";
    }
}

console.log(meetAt(1991));

// 5번 문제

function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let result = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i];
        }
    }
    return result;
}

let smallstNumber = findSmallestElement([100, 200, 3, 0, 2, 1]);
console.log(smallstNumber);

// 6번 문제

let unit = [50000, 10000, 5000, 1000, 500, 100];
function change(money) {
    for(let i=0; i<=unit.length;i++){
        let num = Math.floor(money / unit[i])
        console.log(`${unit[i]}X${num}`)
        money = money - (unit[i]*num)        
    }

    
}

change(12300);

