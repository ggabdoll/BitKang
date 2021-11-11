
const arrayNum = [3,6,10,29,39,20,2,340,382,49]

function getMax(arr)  {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
      max < arr[i] ? max=arr[i] : max = max
    }
    return max
}

function getMin(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {

        min >= arr[i] ? min = arr[i] : min = min
    }
    return min
}
console.log(getMax(arrayNum))
console.log("min:::: ",getMin(arrayNum))