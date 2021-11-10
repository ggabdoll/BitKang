
var readlineSync = require('readline-sync');

const movies = [
    {name : '암살', kiss : 2, action : 12},
    {name : '아바웃타임', kiss : 14, action : 2},
    {name : '토이스토리', kiss : 2, action : 7},
    {name : '노팅힐', kiss : 10, action : 2},
    {name : '타이타닐', kiss : 15, action : 6},
]

const target = {kiss : readlineSync.question("kiss? > "), action : readlineSync.question("action? > ")}

movies.sort((a,b) => {

    const distanceA = Math.sqrt(Math.pow((a.kiss - target.kiss),2) + Math.sqrt(Math.pow((a.action - target.action),2)))
    const distanceB = Math.sqrt(Math.pow((b.kiss - target.kiss),2) + Math.sqrt(Math.pow((b.action - target.action),2)))

    return distanceA - distanceB
})


let actionTotal = 0
let kissTotal = 0

for (let i = 0; i < 3; i++) {
    actionTotal += movies[i].action
    kissTotal += movies[i].kiss
}

if(actionTotal > kissTotal){
    console.log("이 영화는 '액션' 영화입니다.")
}else if(actionTotal < kissTotal){
    console.log("이 영화는 '멜로' 영화입니다.")
}else {
    console.log("이 영화는 '액션멜로' 영화입니다.")
}