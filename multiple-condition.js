 const salary = 20000;
 const isBCS = true ;
 const height = 66;

//  if(salary > 20000 && height > 66){
//     console.log('Perfect');
//     if(isBCS){
//         console.log('Say Yes');
//     }
//     else{
//         console.log('Not Perfect');
//     }
//  }
//  else{
//     console.log('Say No')
//  }

 if((salary >= 20000 && height >= 66 ) || isBCS == false){
    console.log('But Perfect');
    if(isBCS){
        console.log('Say Yes');
    }
    else{
        console.log('Not Perfect');
    }
 }
 else{
    console.log('Say No')
 }