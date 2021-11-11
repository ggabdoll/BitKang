
function printNums(start, end) {

    for (let i = start; i <= end; i++) {
        console.log(i)
    }
}

const result = printNums(1,10)

console.log(result)

function pritnNames(str1, str2, str3){
    console.log(str1)
    console.log(str2)
    console.log(str3)
}

// pritnNames()
// pritnNames("AAAA")
// pritnNames("AAA","BBB")
// pritnNames("AA","BBB","CCCC")

function  calc(a, b, fn){
    console.log("A: " + a)
    console.log("B: " + b)

    const result = fn(a,b)

    return result
}

console.log(calc(10,20, (x,y)=> x + y))

console.log(calc(10,20, (x,y)=> x - y))

