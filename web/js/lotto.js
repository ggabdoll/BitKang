

const btn = document.getElementById("btn")

console.log(btn)

btn.addEventListener('click', (e) => {
    const target = document.getElementById("resultDiv")
    const balls = getLottoNum()

    target.innerHTML = '';

    for (const number of balls) {
    const tag = document.createElement("h3");
   const textNode = document.createTextNode(number)
        tag.appendChild(textNode)
    target.appendChild(tag)
    }
}, false)

function getLottoNum() {
let numArr = []
    while (true) {
        let randomNum = parseInt(Math.random() * 45) + 1;

        if(numArr.indexOf(randomNum) == -1){
            numArr.push(randomNum)
        }
        if (numArr.length == 6){
            break
        }
    }
    numArr.sort((a,b)=> a - b)
    return numArr
}