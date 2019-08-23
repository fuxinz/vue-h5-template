import Cookies from 'js-cookie'

export const TOKEN_KEY = 'access_token'
/**
 * 获取url参数
 */
export const getQueryString = (key) => {
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  var result = window.location.search.substr(1).match(reg)
  return result ? decodeURIComponent(result[2]) : null
}
/**
 * 时间字符串对比
 */
export const CompareDate = (d1, d2) => {
  return ((new Date(d1.replace(/-/g, '/'))) > (new Date(d2.replace(/-/g, '/'))))
}
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage Json
 */
export const getStoreJson = name => {
  if (!name) return
  let content = window.localStorage.getItem(name)
  content = JSON.parse(content)
  return content
}
/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}
/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 保存token
 * @param token
 */
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: 1 })
}

/**
 * 获取token
 * @returns {*}
 */
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}
/**
 * 时间戳转YY-MM-DD HH:MM:SS
 */
export const formatDateTime = time => {
  if (!time) return
  let date = new Date(time)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let minute = date.getMinutes()
  let second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}
/**
 * 时间戳转YYYY/MM/DD
 * @param time
 * @returns {string}
 */
export const formatDate = time => {
  if (!time) return
  let date = new Date(time)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '/' + m + '/' + d
}

/**
 * 表单回滚到顶部
 */
export function scrollTo() {
  if (window.scrollTo) {
    let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
    window.scrollTo(0, Math.max(scrollHeight - 1, 0))
  }
  if (document.documentElement && document.documentElement.scrollTop) {
    document.documentElement.scrollTop = 0
    return
  }
  if (document.body && document.body.scrollTop) {
    document.body.scrollTop = 0
    return
  }
  if (window.pageYOffset) {
    window.pageYOffset = 0
    return false
  }
}
