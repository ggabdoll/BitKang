
let numArr = []
function getLottoNum() {
    while (true) {
        let randomNum = parseInt(Math.random() * 45) + 1;

        if(numArr.indexOf(randomNum) == -1){
            numArr.push(randomNum)
        }
        if (numArr.length == 6){
            break
        }
    }
return numArr
}

// console.log(lottoNum)
console.log('Arr::: ', getLottoNum())