const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    let promise = new Promise((resolve, reject) => {
        if (true) {
            resolve('hello world')
        } else {
            reject('error')
        }
    })
    ctx.body = await promise;
});

app.listen(3000, function () {
    console.log('port 3000 success')

});
