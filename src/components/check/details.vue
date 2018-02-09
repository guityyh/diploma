<template>
<div class="container">
  <div class="top-bar">
    <div class="top-content">
      <span class="title">你是否有以下症状？</span>
      <x-button mini type="primary">确定</x-button>
    </div>
    <div class="float-wrap">
      <div class="item">鼻腔堵塞</div>
      <div class="item">打喷嚏</div>
      <div class="item">流鼻涕</div>
      <div class="item">咳嗽</div>
      <div class="item">肚子疼</div>
    </div>
  </div>
  <div class="progress-content">
    <div class="section-title">你可能的患病结果</div>
    <div class="item" v-for="item in progressJson" :key='item.title'>
      <div class="title">{{item.title}}</div>
      <x-progress :percent="item.percent"></x-progress>
    </div>
  </div>
</div>
</template>

<script>
import { XButton, XProgress } from 'vux'
export default {
  components: {
    XButton,
    XProgress
  },
  data () {
    return {
      progressJson: [
        {
          title: '过敏性鼻炎',
          percent: 20
        },
        {
          title: '过敏',
          percent: 80
        },
        {
          title: '要死了',
          percent: 90
        },
        {
          title: '没救了',
          percent: 100
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.section-title{
  font-size: 0.32rem;
  color: #333;
  padding: 0.2rem 0;
  border-bottom: 1px solid #e9e9e9;
}
.top-bar{
  padding: 0 0.4rem;
  .title{
    font-size: 0.32rem;
    color: #333;
  }
  .weui-btn{
    margin: 0;
  }
  .top-content{
    border-bottom: 1px solid #e9e9e9;
    padding: 0.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .float-wrap{
    padding: 0.2rem 0;
    font-size: 0;
    .item{
      display: inline-block;
      font-size: 0.28rem;
      padding: 0.1rem 0.2rem;
      border: 1px solid #e9e9e9;
      margin: 0.14rem 0.14rem 0;
    }
  }
}
.progress-content{
  padding: 0 0.4rem;
  margin-top: 0.2rem;
  .item{
    margin-top: 0.24rem;
    .title{
      font-size: 0.28rem;
      color: #333;
      margin-bottom: 0.14rem;
    }
  }
}
</style>
