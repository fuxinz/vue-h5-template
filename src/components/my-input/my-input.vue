<template>
  <div class="my-input"
       :class="required ? 'required': ''"
  >
    <mt-field
      :type = "type"
      :label="label"
      :placeholder = "placeholder"
      :disableClear = 'disableClear'
      :readonly = 'readonly'
      :disabled = "disabled"
      :rows = "rows"
      :attr = 'attr'
      :value = 'value'
      v-model = "values[val]"
      @change="change"
      @blur.native.capture="scrollVal"
      @focus.native.capture="onFocus"
    >
      <slot></slot>
    </mt-field >
    <slot name="msg"></slot>
    <div class="input-line"></div>
  </div>
</template>

<script>
import { scrollTo } from '@/libs/utils'

export default {
  name: 'my-input',
  props: {
    required: {
      type: Boolean,
      default: false
    },
    onFocus: {
      type: Function,
      default: () => {}
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    rows: {
      type: String,
      default: '1'
    },
    disableClear: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    attr: {
      type: Object,
      default: () => {}
    },
    value: {
      type: String,
      default: ''
    },
    val: {
      type: String,
      default: ''
    },
    values: {
      type: Object,
      default: () => {}
    },
    change: {
      type: Function,
      default: () => {}
    },
    // 是否回滚到顶部
    isScroll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isFocus: false,
      isShowList: false
    }
  },
  methods: {
    // 滚动回到顶部
    scrollVal () {
      if (!this.isScroll) return
      // this.isFocus = false
      scrollTo()
    }
  }
}
</script>

<style lang="less">
.my-input{
  position: relative;
  .mint-cell-wrapper{
    padding: 0;
    font-size: 15px;
  }
  .input-line{
    width: 100%;
    height: 1px;
    background: #EBEBEB;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5); // 纵向缩放
  }
  .mint-field-core{
    text-align: right;
  }
  .mint-field .mint-cell-title{
    width: auto;
  }
  .mint-cell-value{
    padding-left: 8px;
  }
  .search-list{
    position: absolute;
    bottom: -150px;
    left: 0;
    padding: 10px;
    width: 100%;
    height: 150px;
    border: 1px solid #d6d6d6;
    background: #fff;
    overflow-x: scroll;
    font-size: 14px;
    z-index: 5;
   .list-row{
     padding: 10px 0;
   }
  }
}
.required{
  .mint-cell-text:before{
    display: inline-block;
    margin-right: 2px;
    content: "*";
    color: #e90000;
    font-size: 15px;
  }
}
</style>
