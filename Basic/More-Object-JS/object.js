const student = {
    name : 'Tausif',
    id : 19-41821-3,
    address : '13/F east madartek, dhaka-1214',
    isSingle : false,
    friends : ['Apu', 'Razz', 'Salman','Amir'],
    movies :[{name : 'Marvel', year : '2015'}, {name : 'DC', year:'2017'}],
    act : function(){
        console.log('acting like Marvel')
    },
    car : {
        brand : 'Tesla',
        price : 50000000,
        made : 2025,
        manufacturer:{
            name : 'Tesla',
            ceo : 'Eln Mask',
            country : 'usa'
        }
    }
}

//calling function;
student.act();
console.log(student.act)