
function calcTotal(hourValue, minValue) {

    //시침의 각도 --> 입력 시 12 출력 각도
    function calcHour(hour) {

        const result = (360 / 12) * (hour % 12)
        return result;
    }
 
    //분침의 각도
    const calcMin = (min) => (360 / 60) * min


    //분침의 이동에 따른 시침의 이동각도
    function getExtra(min) {
        return (30 / 60) * min
    }

   const result = Math.abs((calcHour(hourValue) + getExtra(minValue)) - calcMin(minValue))

    return result > 180 ? 360 - result : result
}

console.log(calcTotal(12, 38))




// 12 : 38