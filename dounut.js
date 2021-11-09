var readLine= require('readline-sync');

console.log("What R1:: ")
var r3 = readLine.prompt()
console.log("What R1:: ")
var r4 = readLine.prompt()
const r1 = 10
const r2 = 20
const pi = Math.PI

const circleA = Math.pow(r1, 2) * pi
const circleB = Math.pow(r2, 2) * pi
const circleC = Math.pow(r3, 2) * pi
const circleD = Math.pow(r4, 2) * pi

const result = Math.abs(circleA - circleB)
const readResult = Math.abs(circleC - circleD)
let gap = circleA - circleB

if(gap < 0){
    gap = gap * -1;
}

gap < 0 ? gap * -1 : gap

gap = gap.toFixed(2)

console.log(`이 도형의 넓이는 ${gap}`)//요즘에는 '`'을 선호한다.
console.log(result)
console.log("readLine resutl::: ", readResult)