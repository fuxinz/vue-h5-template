<template>
  <div class="error-container">
    <img src="./../../assets/images/error/not_found.png" alt="" class="error-icon">
    <p class="error-msg">页面不存在</p>
<!--    <mt-button class="back-btn error-btn" type="primary" @click="backPage">返回首页</mt-button>-->
  </div>
</template>

<script>
export default {
  name: 'error404',
  methods: {
    // backPage() {
    //   this.$router.push({ name: 'index' })
    // }
  }
}
</script>

<style lang="less">
  .error-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .error-icon{
      margin-top: 30%;
      margin-bottom: 30px;
      width: 100%;
    }
    .error-msg{
      margin-bottom: 30px;
      font-size: 18px;
      color: #c9c9c9;
      text-align: center;
    }
  }
</style>
