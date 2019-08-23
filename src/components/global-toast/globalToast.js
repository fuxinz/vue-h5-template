import Toast from './global-toast'
import globalLoading from './global-loading'

class ToastConstruction {
  constructor(Vue, options = {}) {
    this.Vue = Vue
    this.options = options
    this.toast = null
    this.num = 0 // 防止连点
    this.isOnOff = true
    this.initParams = {
      isShow: true,
      type: 0,
      title: '', // 标题
      position: 'center', // 位置，
      duration: 2000, // 关闭时间 为-1 时 不自动关闭
      className: '', // 自定义样式
      message: '' // 提示文本
    }
  }
  // 0 info 1成功 2 警告 3 错误  4 无图标
  init (params) {
    this.num = this.num + 1 // 计次的num+1防止连点
    if (this.num < 2) {
      this.initParams = {
        ...this.initParams,
        ...params,
        title: params.title ? params.title : '',
        position: params.position ? params.position : 'center',
        duration: params.duration ? params.duration : 2000,
        className: params.className ? params.className : '',
        message: params.message ? params.message : ''
      }
      const VueToast = this.Vue.extend(Toast)
      return new Promise(resolve => {
        if (!this.toast) {
          this.toast = new VueToast()
          this.toast.$mount()// 手动挂载
          document.querySelector(this.options.container || 'body').appendChild(this.toast.$el)
        }
        this.toast.init(this.initParams)
        this.toast = null
        setTimeout(() => {
          this.num = 0
        }, this.initParams.duration)
      })
    }
  }
  info (params = {}) {
    params = {
      ...params,
      type: 0
    }
    this.init(params)
  }
  success (params = {}) {
    params = {
      ...params,
      type: 1
    }
    this.init(params)
  }
  warning (params = {}) {
    params = {
      ...params,
      type: 2
    }
    this.init(params)
  }
  error (params = {}) {
    params = {
      ...params,
      type: 3
    }
    this.init(params)
  }
  config (params = {}) {
    params = {
      ...params,
      type: 4
    }
    this.init(params)
  }
  loading (params = {}) {
    if (!this.isOnOff) return false
    this.isOnOff = false
    if (document.querySelector('#global-loading')) return false
    let LoadingTip = this.Vue.extend(globalLoading)
    let tpl = new LoadingTip()
    tpl.$mount()
    document.body.appendChild(tpl.$el)
    tpl.init(params)
    // 防移动端滚动穿透
    document.querySelector('#global-loading').addEventListener('touchmove', function (e) {
      e.stopPropagation()
      e.preventDefault()
    })
  }
  close () {
    let tpl = document.querySelector('#global-loading')
    if (!tpl) return false
    document.body.removeChild(tpl)
    this.isOnOff = true
  }
}

export default {
  install (Vue, options = {}) {
    Vue.prototype.$globalToast = new ToastConstruction(Vue, options = {})
  }
}
