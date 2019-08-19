var myArray = [
    {field: 'id', operator: 'eq'},
    {field: 'cStatus', operator: 'eq'},
    {field: 'money', operator: 'eq'}
];
myArray = myArray.filter(function (obj) {
    return obj.field !== 'money';
});

console.log(myArray)
let date = new Date()
console.log(date.getMinutes())


for (let i = 0; i < 0; i++) {
    console.log('0也可以循环')

}

console.log("2019-08-05 05:28:09" < "2019-08-05 04:28:09")

console.log('111')

console.log([1, 2, 3].indexOf(0))

