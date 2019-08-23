<template>
  <div class="toast-global">
    <div class="toast-container" :class="[positionClass,className, isShow ? 'opacityShow': 'opacityHide']">
      <div class="toast-content">
        <h6 class="toast-title" v-show="title&&title .length>0">{{title}}</h6>
        <div class="toast-iconfont" v-show="type!==4">
          <span class="com-toast-iconfont icon-infosign toast-info" v-show="type === 0"></span>
          <span class="com-toast-iconfont icon-yes toast-success" v-show="type === 1"></span>
          <span class="com-toast-iconfont icon-warning1 toast-warning" v-show="type === 2"></span>
          <span class="com-toast-iconfont icon-error toast-error" v-show="type === 3"></span>
        </div>
        <div class="toast-message" v-show="message.length>0">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'global-toast',
  data() {
    return {
      isShow: true,
      positionClass: 'positionCenter',
      type: 0, // 展示类型
      title: '提示', // 标题
      position: 'center', // 位置，
      duration: 3000, // 关闭时间
      className: '', // 自定义样式
      message: '' // 提示文本,
    }
  },
  methods: {
    // 显示
    init(params) {
      let { isShow, title, position, duration, className, message, type } = params
      this.isShow = isShow
      this.type = type // 展示类型
      this.title = title // 标题
      this.position = position // 展示位置
      this.duration = duration // 展示时间
      this.message = message // 提示文本
      this.className = className // 修改class
      // 方法
      duration !== -1 && this.autoClose() // 自动关闭
      this.positionCalculation() // 显示展示位置
    },
    // 自动关闭
    autoClose () {
      setTimeout(() => { this.isShow = false }, this.duration - 250)
      setTimeout(() => {
        document.querySelector('.toast-global').remove()
      }, this.duration)
    },
    // 根据位置参数 显示展示位置
    positionCalculation () {
      switch (this.position) {
        case 'top':
          this.positionClass = 'positionTop'
          break
        case 'bottom':
          this.positionClass = 'positionTottom'
          break
        default:
          this.positionClass = 'positionCenter'
          break
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "./iconfont/iconfont.css";
  @-webkit-keyframes opacityShow{
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes opacityShow{
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @-webkit-keyframes opacityHide {
    0% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
  @keyframes opacityHide {
    0% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
  @-webkit-keyframes loading{
    0% {
     transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  @keyframes loading{
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  .opacityShow{
    animation: opacityShow 0.25s;
    opacity: 1;
  }
  .opacityHide{
    animation: opacityHide 0.25s;
    opacity: 0;
  }
  .toast-container{
    position: fixed;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    min-width: 130px;
    max-width: 250px;
    min-height: 30px;
    border-radius: 5px;
    background: rgba(0,0,0,.7);
    font-size: 12px;
    color: #fff;
    text-align: center;
    z-index: 999;
    .toast-content{
      width: 100%;
    }
    .toast-title{
      margin-bottom: 5px;
      font-size: 14px;
    }
    .toast-message{
      padding: 5px 0;
      line-height: 20px;
    }
  }
  .toast-container-show {
    opacity: 1;
    transition: opacity 1s;
  }
  .positionTop{
    top: 5%;
    transform: translate(-50%,0);
  }
  .positionCenter{
    top: 40%;
    transform: translate(-50%,-50%);
  }
  .positionTottom{
    bottom: 5%;
    transform: translate(-50%,0);
  }
  .toast-iconfont{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
  }
  .toast-info{
    color:#1890ff ;
  }
  .toast-success{
    color:#52c41a;
  }
  .toast-warning{
    color:#faad14 ;
  }
  .toast-error{
    color:#f5222d ;
  }
  .toast-loading{
    display: inline-block;
    animation:loading .7s infinite linear;
  }
  .toast-loading-bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 888;
  }
</style>
