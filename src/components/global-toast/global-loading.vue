<template>
  <div class="global-loading" id="global-loading">
    <div class="global-loading-container">
      <span class="com-toast-iconfont icon-loading global-loading-icon"></span>
      <div class="global-loading-message" v-show="message.length>0">{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'global-loading',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    init({ message = '', duration = -1 }) {
      this.message = message
      this.duration = duration
    }
  }
}
</script>

<style lang="less">
@import "./iconfont/iconfont.css";
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
.global-loading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  .global-loading-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 6px 5px;
    min-width: 120px;
    min-height: 80px;
    border-radius: 5px;
    background: rgba(0,0,0,.7);
    font-size: 12px;
    color: #fff;
    text-align: center;
  }
  .global-loading-icon{
    display: inline-block;
    animation:loading .7s infinite linear;
  }
  .global-loading-message{
    padding-top: 6px;
    width: 100%;
  }
}
</style>
