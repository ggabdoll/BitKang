
const arr = [54,22,14,64,95,85]

//평균 => 모든 점수의 합 / 개수
let sum = 0
for (let i = 0; i < arr.length ; i++) {
    sum += arr[i]
    console.log(`SUM: ${sum}`)
}
let avg = (sum / arr.length).toFixed(3)

//최저
let min = 101
for (let i = 0; i < arr.length; i++) {
    const score = arr[i]
    //만일 score가 min보다 작으면 swap
    if(score < min ){
        min = score
    }

}

//최고
let max =0
for (let i = 0; i < arr.length-1; i++) {
    arr[i] > arr[i+1] ? max = arr[i] : max = arr[i+1]
}
console.log(`MAX:::: ${max}`)