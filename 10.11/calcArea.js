
function getArea(radius) {
    const area = Math.pow(radius) * Math.PI
    return area
}

function getTotal(r1, r2){
    return Math.abs(getArea(r1) - getArea(r2))
}

const result = getTotal(10,20)
console.log(result)

