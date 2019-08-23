<template>
  <div class="my-search" v-show="searchVisible" :style="{paddingTop: isTitle ? '110px': '70px'}">
    <div class="search-head">
      <div class="search-head-container">
        <div class="search-head-content bg-5">
          <img src="../../assets/images/common/search.png" alt="" class="search-logo">
          <mt-field class="search-input"
                    :placeholder="placeholder"
                    type="search"
                    @keydown.native.enter="searchClick"
                    v-model="searchValues[searchVal]"/>
        </div>
        <mt-button class="search-clear" v-show="!searchValues[searchVal]" @click="clearClsoe">取消</mt-button>
        <mt-button class="search-clear"  v-show="searchValues[searchVal]" @click="searchClick">搜索</mt-button>
      </div>
    <h5 class="search-title" v-show="isTitle">最近搜索</h5>
    </div>
    <div class="search-list">
      <slot></slot>
    </div>
    <mt-button class="foot-btn-2 btn-bg-2" @click="clearClsoe">返&nbsp;&nbsp;回</mt-button>
  </div>
</template>

<script>
export default {
  name: 'search-page',
  // watch: {
  //
  // },
  props: {
    // 搜索文本
    placeholder: {
      type: String,
      default: '公司名称/车牌号/借款人'
    },
    // 搜索显示
    searchVisible: {
      type: Boolean,
      default: false
    },
    // 搜索框的值
    searchVal: {
      type: String,
      default: ''
    },
    searchValues: {
      type: Object,
      default: () => {}
    },
    // 搜索请求
    getSearch: {
      type: Function,
      default: () => {}
    },
    // 点击取消 关闭组件
    clearSearch: {
      type: Function,
      default: () => {}
    },
    // 是否显示历史记录的标题
    isTitle: {
      type: Boolean,
      default: true
    },
    // 返回
    goBack: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  methods: {
    // 取消
    clearClsoe () {
      this.scrollTop()
      if (!this.searchValues[this.searchVal]) {
        this.clearSearch()
      } else {
        this.goBack()
      }
    },
    // 点击搜索
    searchClick() {
      if (!this.searchValues[this.searchVal]) return
      this.scrollTop()
      this.getSearch()
    },
    // 滚动条高度回到高度
    scrollTop() {
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
  }
}
</script>

<style lang="less">
  .my-search{
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #fff;
    .search-head{
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 15px;
      width: 100%;
      z-index: 10;
      background: #fff;
    }
    .search-head-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
    }
    .search-back{
      margin-right: 10px;
      padding: 3px 0;
      padding-right: 5px;
    }
    .go-back{
      width: 10px;
    }
    .search-head-content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 15px;
      padding: 0 15px ;
      width: 100%;
      height: 36px;
      border-radius: 20px;
    }
    .search-logo{
      margin-right: 13px;
      width: 17px;
    }
    .search-input{
      width: 100%;
    }
    .mint-cell, .mint-field-core{
      background: transparent;
    }
    .mint-cell-wrapper{
      padding: 0;
    }
    .mint-field-core{
      font-size: 13px;
    }
    .search-clear{
      padding: 0;
      width: 35px;
      background: transparent;
      border: none;
      box-shadow: none;
      font-size: 13px;
      text-align: center;
    }
    .search-title{
      padding-top: 25px;
      font-size: 15px;
    }
    .search-list{
      padding-bottom: 60px;
      height: 100%;
      overflow-y: scroll;
    }
    input[type=search]::-webkit-search-cancel-button{
      -webkit-appearance: none;
    }
  }
</style>
