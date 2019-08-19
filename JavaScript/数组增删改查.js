var array = [{name: '1'}, {name: '2'}]
// splice可以
// array.splice(2,0,{name:'3'})
array.splice(0, 1)
// // array.unshift({name:'jjj'})
// // array.push({name:'jjj'})
console.log(array)
// // var start = new Date().getTime()
// // //  console.log('休眠前：' + start);
// // while (true) {
// //     if (new Date().getTime() - start > 2000) {
// //         break
// //     }
// // }
// // console.log('2000')
//
//
// var arr = [2, 3, 5, 7];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === 5) {
//         arr.splice(i, 1);
//     }
//     if (arr[i] === 3) {
//         arr.splice(i, 1);
//     }
// }
// const map = new Map();

// 使用map保存所有的员工

// 第一次打开页面时
// 1
// 查询出所有关注的员工
// 将所有员工存到map中去。
// 查询出所有的已关注员工。

// 使用map删除掉重复的元素。

// 取出map中的数据。

// 显示所有未关注的员工。employeesNotFocus

// 点击关注时，
// 将这个employeesNotFocus中的这个数据删掉。

// 点击未关注时
// 重复1

// 搜索时
// 搜索结果转换为map。和1一样。

/*

map
    .set(1, {name:'ff'})
    .set(2, {name:'f0f'});

let anies1 = [...map.values()];
let anies2= [...map.values()];


for (let i = 0; i < 5000; i++) {
    console.log(i)

}
*/
// let he = [{
//     department:"压测",
//     employeeNumber:"zyc-test4999"
// }]
// console.log(he)
// he.splice(0,1)
// console.log(he)
