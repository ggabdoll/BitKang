
var readlineSync = require('readline-sync');

var hour = readlineSync.question('Hour?(1~12) :: ')
var condition1 = hour>12 || hour<1

if(condition1){
    console.log('Check Hour')
  hour = readlineSync.question('Hour?(1~12) :: ')
}

var min = readlineSync.question("Minute? :: ")
const condition2 = min>60 || min<1

if(condition2){
    console.log('Check Minute')
    min = readlineSync.question('Minute? :: ')
}

//시침각도 360/12 * 4
let hourD = (360/12) * hour

//분침각도 360/60 * 47
const minD = (360/60) * min


//시침이동 => 47 얼마나 이동
const extra = (30/60) * min

hourD += extra

console.log(hourD, minD)

const gap = Math.abs(hourD - minD)
if(gap > 180){
    console.log('Answer::: ', 360- gap)
}else {
    console.log('Answer::: ', gap)
}

