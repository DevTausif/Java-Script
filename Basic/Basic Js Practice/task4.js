// var a = isNaN('11');
// var a = isNan (2-10);
// console.log(a);
// First code result is the false because we can see "11" is a string number and isNaN checking that is this number or not, if this is just "Tausif" a name then it will be true because there is no number, on that "11" value false because 11 is string but a number thats why the first code result is false and similar goes to second code. it is the theoretical explanation.But over all this code would not be run because of on the second code isNan is exist which is incorrect it should be isNaN as like first code. that's why the code will be given output is error.


// This is the correct version and the output is false for both case's.
var a = isNaN('11');
var a = isNaN (2-10);
console.log(a, a);