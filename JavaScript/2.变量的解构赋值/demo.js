// 解构赋值允许按照一定模式，从数组或对象中提取值

/*
    1. 数组的解构赋值
 */
let [name, age] = ['tom', 12];
console.log('name = ' + name + ', age = ' + age);

console.log('---------------------')

/*
    2. 对象的解构赋值，对象的解构赋值要求变量名称必须与属性一样，与次序没有要求。
 */
let {lastName, firstName} = {firstName: '江', lastName: '峰'}
console.log(firstName + '' + lastName)

let {max, min} = Math

console.log(max(2, 3))


/*
    对象也可以赋予默认值,默认是生效的条件是对象的属性值严格等于undefined
 */

let {foo = 4, boo} = {boo: 2};
console.log('foo = ' + foo)
console.log('boo = ' + boo)

console.log('--------------------------')

/*
    用途
 */

// 从函数返回多个返回值
function example() {
    return [1, 2, 3];
}

let [x, y, z] = example()
console.log('x = ' + x)
console.log('y = ' + y)
console.log('z = ' + z)


// 参数传值
console.log('canshu')

function example1([x, y, z]) {
    console.log('x = ' + x)
    console.log('y = ' + y)
    console.log('z = ' + z)
}

example1([1, 2, 3])

// 遍历Map结构

console.log('遍历map结构')

const map = new Map();
map.set('first', 1);
map.set('second', 2);
map.set('third', 3);
// console.log(map)

/*for (let [key,value] of map) {
    console.log(key + ' = ' + value);
    // console.log('age = ' + age);
}*/

for (let [, value] of map) {
    console.log(value);
    if (value === 2) {
        break;
    }
}
