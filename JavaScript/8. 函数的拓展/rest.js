function click() {

    console.log('1')

    setTimeout(() => {
        console.log(3)

    }, 3);

    for (let i = 0; i <= 1000000000; i++) {
        let sum = 0;
        sum += i;
        if (i === 1000000000) {
            console.log(2)
        }
    }
    console.log(4)
}

// click();

// this.name = 'ljm'

function foo() {
    this.name = 'jf'

    /* setTimeout(() => {
         console.log(this.name)
     }, 100)*/
    setTimeout(function () {
        console.log(this.name)
    }, 100)

}

// function goo() {
//     console.log(name)
// }

// foo()

let boo = function boo() {
    this.name = 'jf'

    console.log(this.name)

}
console.log(new boo().name)

let hh = {
    name: 'ljm',
    fn: function () {
        console.log(this.name)
    }
}

hh.fn()