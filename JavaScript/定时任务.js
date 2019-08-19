console.log(3600000 / 1000 / 60)


let config = {
    interval: 1, // 执行的间隔天数
    time: "16:04:20" //执行的时间点 时在0~23之间
}

function timeoutFunc(config) {

    let nowTime = new Date().getTime()

    let timePoints = config.time.split(':').map(i => parseInt(i))

    let recent = new Date().setHours(...timePoints)
    console.log('recent', recent)


    recent >= nowTime || (recent += 24 * 2000)

    setTimeout(() => {

        setInterval(myFunction, config.interval * 2000)

    }, recent - nowTime)

}

function myFunction() {
    console.log('刷新页面')

}


timeoutFunc(config)

/*

config参数的说明： {

    interval: 1, //间隔天数，间隔为整数

        runNow: false, //是否立即运行

        time: "14:00:00" //执行的时间点 时在0~23之间

}

 */
