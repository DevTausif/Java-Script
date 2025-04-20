function income_Tax(income, expense){

   let income_expense = 0
   if(0 <= income && 0 <= expense && income >= expense){
    
            const result = income - expense
            income_expense += result
             const tax = income_expense * 0.2
             return tax
        
   }

   else{

      return 'Invalid input'

   }

}
const tax = [income_Tax(10000,3000), income_Tax(34000,1753),income_Tax(5000,1500),income_Tax(7000,7000),income_Tax(-5000,2000),income_Tax(6000,-1500)]
console.log(tax.join('\n'))