/* eslint-disable */
export default {
  install(Vue, options) {
    // 金钱的保留两位小数，3位隔开，加“¥”过滤器
    Vue.filter('myMoney', function(money, point) {
      point = point > 0 && point <= 20 ? point : 2
      var isNegative = false
      if (money < 0) {
        money = Math.abs(money)
        isNegative = true
      }
      money =
        parseFloat((money + '').replace(/[^\d\.-]/g, '')).toFixed(point) + ''
      var l = money
        .split('.')[0]
        .split('')
        .reverse()
      var r = money.split('.')[1]
      var result = ''
      for (var i = 0; i < l.length; i++) {
        result += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? ',' : '')
      }
      return (
        '¥ ' +
        ((isNegative ? '-' : '') +
          result
            .split('')
            .reverse()
            .join('') +
          '.' +
          r)
      )
    })
    // 金钱的保留两位小数，3位隔开
    Vue.filter('handleMoney', function(money, point) {
      point = point > 0 && point <= 20 ? point : 2
      var isNegative = false
      if (money < 0) {
        money = Math.abs(money)
        isNegative = true
      }
      money =
        parseFloat((money + '').replace(/[^\d\.-]/g, '')).toFixed(point) + ''
      var l = money
        .split('.')[0]
        .split('')
        .reverse()
      var r = money.split('.')[1]
      var result = ''
      for (var i = 0; i < l.length; i++) {
        result += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? ',' : '')
      }
      return (
        (isNegative ? '-' : '') +
        result
          .split('')
          .reverse()
          .join('') +
        '.' +
        r
      )
    })
    Vue.filter('handlePhone', function(phone) {
      if(!phone) return ''
      let arr=phone.split('')
      arr.splice(3,4,'*','*','*','*')
      return arr.join('')
    })
  }
}
