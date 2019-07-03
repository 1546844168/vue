// 函数的参数是有作用域的

let x = 2;

function fun(x, y = x) {
    console.log('x = ' + x)
    console.log('y = ' + y)

}

function foo(x = 1, y = 2) {
    console.log('x = ' + x)
    console.log('y = ' + y)
}

foo(undefined, null);

name = 'jf'
console.log(name)

