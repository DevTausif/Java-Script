function calculateFinalScore(result){

    if(typeof result !== 'object' || result === null){
        return 'Invalid Input'
    }
     let family = 0
     if(result.isFFamily === true){
        family += 20
     }

     const finalResult = result.testScore + result.schoolGrade + family
     if(typeof result.name === 'string' && result.testScore <= 50 && typeof result.testScore === 'number' && result.schoolGrade <= 30 && typeof result.schoolGrade === 'number' && typeof result.isFFamily === 'boolean'){
        if(finalResult >= 80){
            return true
        }
     }

     return false
}

const score = [
    {
        name : 'Rajib',
        testScore : 45,
        schoolGrade : 25,
        isFFamily : true 
    },

    {
        name : 'Rajib',
        testScore : 45,
        schoolGrade : 25,
        isFFamily : false 
    },

    'hello',
   
   {
    name : 'Rajib',
    testScore : 15,
    schoolGrade : 25,
    isFFamily : true
  }
   

]

for(const items of score){
    const result = calculateFinalScore(items)
    console.log(result)
}