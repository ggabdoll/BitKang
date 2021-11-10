
const arr = [
    [90, 87, 140],
    [120, 130, 150],
    [180, 240, 200],
    [180, 140, 190]
]
const parr = []
//가장 매출이 좋았던 분기
//각 분기별로 매출 평군을 만든다.
for (let i = 0; i < arr.length ; i++) {
    const tempArr = arr[i]
    let sum = 0
    for (let j = 0; j < tempArr.length; j++) {
      sum += tempArr[j]
    }
    const tempAvg = (sum/tempArr.length).toFixed(2)
    parr.push(parseFloat(tempAvg))
    console.log(`AV::: ${parr}`)
}

//그 중에서 최대 평균을 찾는다.
let max = 0
let period = 0
for (let i = 0; i < parr.length; i++) {
    if(parr[i] > max){
        max = parr[i]
        period = i
    }
}
console.log("MAX:::", period+1 )