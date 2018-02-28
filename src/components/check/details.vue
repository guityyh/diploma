<template>
<div class="details">
  <div class="top-bar">
    <div class="top-content">
      <span class="title">你是否有以下症状？</span>
      <x-button mini type="primary">确定</x-button>
    </div>
    <div class="float-wrap">
      <div class="item">头痛</div>
      <div class="item">昏睡</div>
      <div class="item">头痛欲裂</div>
      <div class="item">睡不着</div>
      <div class="item">肚子疼</div>
    </div>
  </div>
  <div class="progress-content">
    <div class="section-title">你是否还伴随以下症状？</div>
    <div class="item" v-for="item in progressJson" :key='item.title'>
      <div class="title">{{item.title}}</div>
      <x-progress :percent="item.percent" :show-cancel="false"></x-progress>
    </div>
  </div>

  <div class="recommend">
    <div class="recommend-title"><i class="iconfont icon-14"></i>专家推荐</div>
    <div class="single" v-for="i in 2">
      <div class="portrait"><img src="./../../assets/images/docportrait.png" alt=""></div>
      <div class="title">
        <div class="call">
          <div class="name">安德拉</div>
          <div class="honor">一级专家</div>
        </div>
        <div class="skilled">擅长：小儿推拿、整脊、疝气</div>
      </div>

      <router-link tag="div" to="/docdetail" class="button">预约</router-link>
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
          title: '偏头痛',
          percent: 20
        },
        {
          title: '紧张性头痛',
          percent: 80
        },
        {
          title: '三叉神经痛',
          percent: 90
        },
        {
          title: '丛集性头疼',
          percent: 100
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.details{
  padding-bottom: 1rem;
  .section-title{
    font-size: 0.32rem;
    color: #333;
    padding: 0.2rem 0;
    border-bottom: 1px solid #e9e9e9;
  }
  .top-bar{
    background-color: #fff;
    padding: 0 0.4rem;
    .title{
      font-size: 0.32rem;
      color: #333;
    }
    .weui-btn{
      margin: 0;
    }
    .weui-btn_primary{
      background-color: #169BD5;
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
        &.active{
          border: 1px solid #169BD5;
        }
      }
    }
  }
  .weui-progress__inner-bar{
    background-color: #169BD5;
  }
  .progress-content{
    padding: 0 0.4rem 0.4rem;
    margin-top: 0.2rem;
    background-color: #fff;
    .item{
      margin-top: 0.24rem;
      .title{
        font-size: 0.28rem;
        color: #333;
        margin-bottom: 0.14rem;
      }
    }
  }
  .recommend{
    margin-top: 0.2rem;
    padding: 0.2rem 0.4rem;
    background-color: #fff;
    .recommend-title{
      font-size: 0.32rem;
      line-height: 0.52rem;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid #f2f2f2;
      .icon-14{
        font-size: 0.4rem;
        margin-right: 0.1rem;
      }
    }
    .single{
      background-color: #fff;
      padding: 0.3rem 0;
      font-size: 0.28rem;
      border-bottom: 1px solid #e9e9e9;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:last-child{
        border-bottom: none;
      }
      .portrait {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .title{
        margin-left: 0.5rem;
        flex: 1;
        .call {
          .name {
            font-size: 0.32rem;
            display: inline-block;
          }
          .honor {
            display: inline-block;
            background-color: #B9EDF8;
            border-radius: 0.1rem;
            padding: 0.05rem 0.1rem;
          }
        }
        .skilled{
          margin-top: 0.1rem;
        }
      }
      .button{
        color: #169BD5;
        display: block;
        line-height: 0.52rem;
        padding: 0 0.3rem;
        border-radius: 0.1rem;
        border: 1px solid #169BD5;
      }

    }
  }
}

</style>
