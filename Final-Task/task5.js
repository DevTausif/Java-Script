function waitingTime(waitingTimes, serial){
    if(!Array.isArray(waitingTimes) || typeof serial !== 'number' || serial < waitingTimes.length){
        return 'Invalid Input'
    }

    let totalTime = 0;
    for(const time of waitingTimes){
        totalTime += time
    }

    const avgTime = Math.round(totalTime / waitingTimes.length)
    const waitingTime = serial - 1 - waitingTimes.length

    return waitingTime * avgTime
}

const timePairs = [
    [[3,5,7,11,6],10],
    [[13,2],6],
    [[13,2,6,7,10],6],
    [[6],4,],
    [7,4,],
    ['[6,2]',9],
    [[7,8,3,4,5],'9'],
]

for(let pair of timePairs){
   const [times, serial] = pair
   console.log(waitingTime(times, serial))
}