// if문 숙제
// 1번 문제
let num = 1;

if (num == 0) {
    console.log("0입니다.")
} else if (num < 0 ) {
    console.log("음수입니다.")
} else {
    console.log("양수입니다.")
}

// 2번 문제
// let point = 60;

// if ( point >= 90) {
//     console.log("A")
// } else if (point >= 80 && point < 90) {
//     console.log("B")
// } else if (point >= 70 && point < 80) {
//     console.log("C")
// } else if (point >= 60 && point < 70) {
//     console.log("D")
// } else {
//     console.log("F")
// }

// // 강사님 답
// let score =70;
// let grade = '';
// if(90<=score && score<=100){
//     grade = "A";
// }else if(80<=score && score<=89){
//     grade = "B";
// }else if(70<=score && score<=79) {
//     grade = "C";
// }else if(60<=score && score<=69) {
//     grade = "D";
// }else if(0<=score && score<=59) {
//     grade = "F";
// }else {
//     console.log("잘못된 범위의 접근입니다.")
// }
// console.log(grade);

let score =  60
let grade =''
if(90<=score && score<=100){
  grade = "A"
}else if(80<=score && score<=89){
  grade = "B"
}else if(70<=score && score<=79){
  grade ="C"
}else if(60<=score && score<=69){
  grade="D"
}else if(0<=score && score<=59){
  grade="F"
}else {
  console.log("잘못된 범위의 점수입니다")
}
console.log(grade)

// // 3번 문제
// let skills = ["HTML", "DSS", "Javascript", "React"]
// if ( skills.includes("HTML") && skills.includes("CSS") && skills.includes("Javascript") && skills.includes("React")) {
//     console.log("합격입니다.")
// } else if (skills.includes("HTML") && skills.includes("CSS")) {
//     if (skills.includes("Javascript") || skills.includes("React"))
//     console.log("예비입니다.")
//     else {
//         console.log("탈락입니다.")
//     }
// } else {
//     console.log("탈락입니다.")
// }

let skills = ["HTML", "Javascript", "React"]

if(skills.includes('Javascript') && skills.includes("React")){
    console.log("합격")
}else if (skills.includes("Javascript") || skills.includes("React")){
    console.log("예비")
} else {
    console.log("탈락")
}