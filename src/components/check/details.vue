<template>
<div class="disease-details">
  <div class="top-bar">
    <div class="top-content">
      <span class="title">你是否还伴随以下症状？请点击查看</span>
    </div>
    <div class="float-wrap">
      <div class="item" :class="{'active': isClick.indexOf(1) > -1}" @click="addActive(1, 5)">恶心</div>
      <div class="item" :class="{'active': isClick.indexOf(2) > -1}" @click="addActive(2, 20)">发热（体温升高）</div>
      <div class="item" :class="{'active': isClick.indexOf(3) > -1}" @click="addActive(3, 10)">感觉房间在旋转</div>
      <div class="item" :class="{'active': isClick.indexOf(4) > -1}" @click="addActive(4, 30)">头晕目眩</div>
      <div class="item" :class="{'active': isClick.indexOf(5) > -1}" @click="addActive(5, 15)">头重脚轻感</div>
    </div>
  </div>
  <div class="progress-content">
    <div class="section-title">你可能的患病结果</div>
    <div class="item" v-for="item in filterJson" :key='item.title'>
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
        {"1":[{title: '偏头痛', percent: 40},
        {title: '慢性鼻窦炎', percent: 30},
        {title: '急性咽炎', percent: 30},
        {title: '急性上呼吸道感染', percent: 15},
        {title: '精神性疼痛', percent: 10}]},

        {"1":[{title: '病毒性感染', percent: 50},
        {title: '流感', percent: 35},
        {title: '急性咽炎', percent: 25},
        {title: '急性上呼吸道感染', percent: 10},
        {title: '偏头痛', percent: 5}]},

        {"1":[{title: '病毒性感染', percent: 40},
          {title: '偏头痛', percent: 40},
          {title: '脱水', percent: 15},
          {title: '流感', percent: 10},
          {title: '急性咽炎', percent: 5}]},

        {"1":[{title: '偏头痛', percent: 65},
          {title: '外周性眩晕（前庭性眩晕）', percent: 30},
          {title: '头部外伤', percent: 15},
          {title: '脑震荡', percent: 15},
          {title: '精神性头痛', percent: 5}]}
      ],
      isClick: [],
      score: 0
    }
  },
  computed: {
    filterJson () {
      if (this.score >= 0 && this.score < 25) {
        return this.progressJson[0]['1']
      }else if (this.score >= 30 && this.score < 50) {
        return this.progressJson[3]['1']
      }else if (this.score >= 80) {
        return this.progressJson[2]['1']
      }else {
        return this.progressJson[1]['1']
      }
    }
  },
  methods : {
    addActive (item, score) {
      const index = this.isClick.indexOf(item)
      if (index > -1) {
        this.isClick.splice(index, 1)
        this.score -= score
      } else {
        this.isClick.push(item)
        this.score += score
      }
      console.log(this.score)
    }
  }
}
</script>

<style lang="scss">
.disease-details{
  background-color: #fff;
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
      background-color: #2ac8f5;
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
          border: 1px solid #2ac8f5;
        }
      }
    }
  }
  .progress-content{
    padding: 0 0.4rem 0.4rem;
    margin-top: 0.2rem;
    background-color: #fff;
    .weui-progress__inner-bar{
      background-color: #2ac8f5;
    }
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
        color: #2ac8f5;
        display: block;
        line-height: 0.52rem;
        padding: 0 0.3rem;
        border-radius: 0.1rem;
        border: 1px solid #2ac8f5;
      }

    }
  }
}

</style>
