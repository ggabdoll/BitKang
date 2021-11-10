
const arr = ['타노스','아이언맨','블랙 위도우']

arr[3] = "블랙팬서"

//push의 리턴값은 배열의 길이이다.
const arrLength = arr.push('토르')



//특정 인덱스에 위치를 알 수 있다.
//console.log(arr.indexOf(("캡틴아메리카")))

//특정 인덱스를 삭제 할 수 있다. splice
arr.splice(1,1) //인덱스를 빼고 인덱스 위치가 조정된다. 개 미쳤다.....

console.log(arr)

//break는 밑으로 continue는 위로 해당조건 인덱스를 제외하고 출력
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '블랙 위도우'){
        continue
    }
    console.log(i)
    console.log(arr[i])

}

console.log("---------------------------------------")
