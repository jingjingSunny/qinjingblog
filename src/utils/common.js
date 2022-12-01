// 工具js
// 判断数字的位数
function judgeNumberDigit(num) {
    let numString = num.toString()
    return numString.length<2 ? ('0' + numString) : numString
}
//转换时间 日历控件转换成需要的日期格式（ 年-月-日  时-分-秒 ）d : antd收集机制等到的日期，bol : true为(YYYY-MM-DD)，false||不传为(YYYY-MM-DD hh:mm:ss)
function getDate(d,bol){
    const time = new Date(d);
    let needTime = time.getFullYear() + '-' + judgeNumberDigit(time.getMonth() + 1) + '-' + judgeNumberDigit(time.getDate());
    if(!bol){
        needTime += ' ' + judgeNumberDigit(time.getHours()) + ':' + judgeNumberDigit(time.getMinutes()) + ':' + judgeNumberDigit(time.getSeconds());
    }
    return needTime
}
export default {
    getDate,
    judgeNumberDigit
}