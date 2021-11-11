//model array 영화들의 액션씬 / 키스신 -> 'A' / 'B'
const movies = [
    {action : 12 , kiss : 2, categry : 'A'}, //암살
    {action : 2 , kiss : 14, categry : 'M'}, //어바웃 타임
    {action : 7 , kiss : 2, categry : 'A'}, //토이스토리
    {action : 2 , kiss : 10, categry : 'M'}, //노팅힐
    {action : 6 , kiss : 15, categry : 'A'}, //타이타닉
]

//target
const target = {action : 3, kiss : 9} //반지의 제왕

//movies sorting [target]
movies.sort((a, b) => {

    const disA = Math.sqrt(Math.pow(a.action - target.action, 2) + Math.pow(a.kiss - target.kiss , 2))
    const disB = Math.sqrt(Math.pow(b.action - target.action, 2) + Math.pow(b.kiss - target.kiss , 2))

    return disA - disB > 0 ? 1 : -1

})

console.log(movies)