// 异步操作的结果是一个promise。

// 这是一个异步操作，并且有返回值
async function fun() {
    return 1;
}


// console.log('num = ' + num)
let num1 = 'jf';

async function goo() {

    await fun().then(num => {
        num1 = num;
    })
    console.log('num1 = ' + num1);
}

// goo();


function get() {
    let num = null;
    // 用promise来处理异步操作
    return new Promise((resolve, reject) => {
        num = fun();
        console.log('get() -num = ' + num)
        resolve(num);
    })
}

get().then(num => {
    console.log(num)

})
