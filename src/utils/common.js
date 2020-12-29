let commonUtil = {
  add0(n) {
    return n < 10 ? `0${n}` : n
  },
  /**
   * 时间戳转化成日期格式 unix时间戳转化成yyyyMMdd
   */
  getFormateData(unixData) {
    var date = new Date(unixData) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 + '').padStart(2, '0')
    var D = (date.getDate() + '').padStart(2, '0')
    return Y + M + D
  },
  deepCopy(source) {
    if (typeof source !== 'object' || source === null) {
      return source
    }
    let sourceCopy = source instanceof Array ? [] : {}
    for (let item in source) {
      sourceCopy[item] = typeof source[item] === 'object' ? this.deepCopy(source[item]) : source[item]
    }
    return sourceCopy
  },
  uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "";

    var uuid = s.join("");
    return uuid
  },
  replace(richtext) {
    try {
      const getImgTag = new RegExp(/<img[^>]*>/, 'gi');
      const removeStyle = new RegExp(/style\s*?=\s*?(['"])[\s\S]*?\1/, 'gi');
      const getImgTagStart = new RegExp('<img', 'gi');
      const changeWidth = new RegExp(/width:(\s)?(\d+px|\d+vw);/, 'gi')
      richtext = richtext.replace(getImgTag, (match) => {
        let str = match.replace(removeStyle, "");
        return str.replace(getImgTagStart, '<img style="max-width: 100%; height: auto; display: block;"');
      });
      richtext = richtext.replace(changeWidth, 'width: auto;')
      richtext = richtext.replace(/<span id="js_tx_video.+<\/iframe><\/span>/, '')
      return richtext + ''
    } catch (err) {
      console.log(err)
    }
  },
  debounce(fn, delay) {
    let timer = null
    return function () {
      let arg = arguments
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arg)
      }, delay)
    }
  },
  throttle(func, delay = 100) {
    let prev = Date.now()
    return function () {
      let context = this
      const args = arguments
      const now = Date.now()
      if (now - prev >= delay) {
        func.apply(context, args)
        prev = Date.now()
      }
    }
  },
  timeFormat(time) {
    let timeStr = ''
    let stringFormat = (i) => {
      return i < 10 ? `0${i}` : `${i}`
    }
    let minuteTime = 0
    let secondTime = 0
    let hourTime = 0
    if (time < 60) {
      timeStr = `00:${stringFormat(time)}`
    } else if (time >= 60 && time < 3600) {
      minuteTime = parseInt(time / 60)
      secondTime = parseInt(time % 60)
      timeStr = `${stringFormat(minuteTime)}:${stringFormat(secondTime)}`
    } else if (time >= 3600) {
      let _t = parseInt(time % 3600)
      hourTime = parseInt(time / 3600)
      minuteTime = parseInt(_t / 60)
      secondTime = parseInt(_t % 60)
      timeStr = `${stringFormat(hourTime)}:${stringFormat(minuteTime)}:${stringFormat(secondTime)}`
    }
    return timeStr
  }
}
export default commonUtil
