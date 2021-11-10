
const arr = [
    [90, 87, 140],
    [120, 130, 150],
    [180, 240, 200],
    [180, 140, 190]
]

const monthlySales = [
    {month: '1월', sale: 90},
    {month: '2월', sale: 87},
    {month: '3월', sale: 140},
    {month: '4월', sale: 120},
    {month: '5월', sale: 130},
    {month: '6월', sale: 150},
    {month: '7월', sale: 180},
    {month: '8월', sale: 240},
    {month: '9월', sale: 200},
    {month: '10월', sale: 180},
    {month: '11월', sale: 140},
    {month: '12월', sale: 190},
]
//sale별 sorting
monthlySales.sort((a,b) => {
   return  a.sale - b.sale
})

//최고매출월
let maxSaleMonth = monthlySales[monthlySales.length-1].month
let maxSale = monthlySales[monthlySales.length-1].sale
//처저매출월
let minSaleMonth = monthlySales[0].month
let minSale = monthlySales[0].sale

//평균매출
let sum = 0
for (let i = 0; i < monthlySales.length; i++) {
     sum += monthlySales[i].sale
}
let avg = Math.round(sum/monthlySales.length, 2)

console.log(` 최고매출월은 '${maxSaleMonth}' ${maxSale}원\n 최저매출월은 '${minSaleMonth}' ${minSale}원\n 평균매출액은 ${avg}원 입니다.`)
// const parr = []
// //가장 매출이 좋았던 분기
// //각 분기별로 매출 평군을 만든다.
// for (let i = 0; i < arr.length ; i++) {
//     const tempArr = arr[i]
//     let sum = 0
//     for (let j = 0; j < tempArr.length; j++) {
//       sum += tempArr[j]
//     }
//     const tempAvg = (sum/tempArr.length).toFixed(2)
//     parr.push(parseFloat(tempAvg))
//     console.log(`AV::: ${parr}`)
// }
//
// //그 중에서 최대 평균을 찾는다.
// let max = 0
// let maxPeriod = 0
// for (let i = 0; i < parr.length; i++) {
//     if(parr[i] > max){
//         max = parr[i]
//         maxPeriod = i
//     }
// }
// console.log("MAX:::", maxPeriod+1 )
//
// //최소 평균
// let minPeriod = 0
// for (let i = 0; i < parr.length-1; i++) {
//     parr[0] < parr[i+1] ? parr[0] = parr[0] : parr[0] = parr[i+1]
//     console.log("MIN::",parr[0])
// }