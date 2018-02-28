<template>
  <div class="home">
    <div class="top-img">
      <swiper :list="hospital_list" height="4rem" dots-position="center" auto loop></swiper>
    </div>
    <div class="registration">
      <router-link tag="div" to="/book" class="classify"><div class="classify-icon first"><div class="iconfont icon-yiyuanzixunkaobei"></div></div>按科室挂号</router-link>
      <router-link tag="div" to="/doctor" class="classify"><div class="classify-icon second"><div class="iconfont icon-zhuyuanyishengzhan"></div></div>按医生挂号</router-link>
      <router-link tag="div" to="/check" class="classify"><div class="classify-icon third"><div class="iconfont icon-yiliao"></div></div>按症状挂号</router-link>
    </div>
    <div class="broadcast"><i class="iconfont icon-gonggao"></i>公告：XX三级甲等医院咨询热线000-0123456</div>
    <div class="skip">
      <div class="skip-left">
        <router-link tag="div" to="/news" class="info">健康资讯</router-link>
        <router-link tag="div" to="/managelist" class="record">档案管理</router-link>
      </div>
      <div class="skip-right">
        <router-link tag="div" to="/notice" class="notice">预约须知</router-link>
        <router-link tag="div" to="/ask" class="ask">在线咨询</router-link>
      </div>
    </div>
    <a href="dd">
      <div class="subject">
      <img src="./../assets/images/subject.jpg" alt="">
    </div>
    </a>

  </div>
</template>

<script>
import { Swiper } from 'vux'
export default {
  components: {
    Swiper
  },
  data () {
    return {
      hospital_list: [
        {img: require('./../assets/images/hospital-2.jpg')},
        {img: require('./../assets/images/hospital-1.jpg')},
        {img: require('./../assets/images/hospital-3.jpg')}
      ]
    }
  }
}


</script>

<style lang="scss">
.home{
  font-size: 0.28rem;
  padding-bottom: 1rem;
  .registration{
    margin-top: 0.2rem;
    padding: 0.2rem 0.4rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    text-align: center;
    .iconfont{
      font-size: 0.8rem;
      color: #fff;
    }
    .classify-icon{
      font-size: 0;
      line-height: 1.4rem;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      margin-bottom: 0.2rem;
      &.first{
        background-color: #2AC8F5;
      }
      &.second{
        background-color: #4CE190;
      }
      &.third{
        background-color: #FA7457;
      }
    }
  }
  .broadcast{
    padding: 0.2rem 0.4rem;
    background-color: #D0E8D8;
    .icon-gonggao{
      color: #02A437;
      margin-right: 0.3rem;
    }
  }
  .skip{
    margin-top: 0.2rem;
    display: flex;
    background-color: #fff;
    text-align: center;
    .skip-left{
      width: 50%;
      border-right: 2px solid #f2f2f2;
      .info{
        line-height: 1.2rem;
        border-bottom: 2px solid #f2f2f2;
      }
      .record{
        line-height: 0.8rem;
      }
    }
    .skip-right{
      width: 50%;
    }
    .notice{
      line-height: 0.8rem;
      border-bottom: 2px solid #f2f2f2;
    }
    .ask{
      line-height: 1.2rem;
    }
  }
  .subject{
    margin-top: 0.2rem;
    width: 100%;
    height: 3.5rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
