<template>
  <div class="home">
    <div class="top-img">
      <swiper :list="hospital_list" height="3.5rem" dots-position="center" auto loop></swiper>

      <div class="registration">
        <div class="border">
          <router-link tag="div" to="/book" class="classify"><div class="classify-icon-1"><img src="./../assets/images/office.png" alt=""></div>按科室挂号</router-link>
          <router-link tag="div" to="/doctor" class="classify"><div class="classify-icon-2"><img src="./../assets/images/doc.png" alt=""></div>按医生挂号</router-link>
          <router-link tag="div" to="/check" class="classify"><div class="classify-icon-3"><img src="./../assets/images/diseaseslect.png" alt=""></div>按症状挂号</router-link>
        </div>
      </div>

    </div>

    <div class="definite de-broadcast">
      <swiper auto loop height="28px" direction="vertical" :interval=2000 :show-dots="false">
        <swiper-item><p class="broadcast"> <i class="iconfont icon-broadcast"></i>公告：XX三级甲等医院咨询热线000-0123456</p></swiper-item>
        <swiper-item><p class="broadcast"> <i class="iconfont icon-broadcast"></i>公告：本周张强医生将来咱们医院行医</p></swiper-item>
        <swiper-item><p class="broadcast"> <i class="iconfont icon-broadcast"></i>永拒红包回扣，确保病员满意</p></swiper-item>
      </swiper>
    </div>

    <div class="skip">
      <router-link tag="div" to="/notice" class="skip-item"><div class="icon first"><img src="./../assets/images/notice.png" alt=""></div>预约须知</router-link>
      <router-link tag="div" to="/managelist" class="skip-item"><div class="icon second"><img src="./../assets/images/record.png" alt=""></div>档案管理</router-link>
      <a href="https://www.sobot.com/chat/h5/index.html?sysNum=d49779395d294b91b7e42c1776a10050" class="skip-item"><div class="icon third"><img src="./../assets/images/ask.png" alt=""></div>在线咨询</a>
    </div>

    <div class="definite">
      <!--<a href="dd">-->
        <div class="subject">
          <img src="./../assets/images/zhauti.png" alt="">
          <div class="subject-title"><div class="title"><span class="line"></span>神经与免疫的美丽邂逅</div></div>
        </div>
      <!--</a>-->

      <div class="info">
        <div class="headline">健康资讯</div>
        <router-link tag="div" :to="{path: '/article', query: {id: item.id}}" class="article-item" v-for="item in articleList" :key="item.id">
          <div class="particulars">
            <div class="title">{{item.title}}</div>
            <div class="else">
              <div class="time">{{item.publish_time.split(' ')[0]}}</div>
              <div class="read"><i class="iconfont icon-yanjing"></i><span>{{item.reading}}</span></div>
            </div>
          </div>
          <div class="article-img"><img :src="item.img"></div>
        </router-link>

        <router-link tag="div" to="/news" class="article-more">查看更多健康资讯</router-link>
      </div>

    </div>



  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
import api from '@/api'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      hospital_list: [
        {img: require('./../assets/images/hospital-1.jpg')},
        {img: require('./../assets/images/hospital-2.jpg')},
        {img: require('./../assets/images/hospital-3.jpg')}
      ],
      articleList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const {data: {code, data}} = await api.get('http://diploma.wbloc.com/api/article/lists/', {is_top: 1})
      if (code === 200) {
        this.articleList = data.splice(0, 3)
      }
    }
  }
}


</script>

<style lang="scss">
.home{
  font-size: 0.28rem;
  background-color: #fff;
  padding-bottom: 1rem;
  .top-img{
    position: relative;
  }
  .registration{
    padding: 0.3rem 0.4rem 0.4rem;
    position: absolute;
    width: 100%;
    transform: translateY(-50%);
    .border{
      padding: 0.3rem 0.4rem 0.4rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      text-align: center;
      border-radius: 0.2rem;
      box-shadow: 0 1px 15px 1px rgba(0, 0, 0, .2) ;
    }
    .classify-icon-1{
      margin: 0.1rem auto;
      width: 0.86rem;
      height: 0.75rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .classify-icon-2{
      margin: 0.1rem auto;
      width: 0.66rem;
      height: 0.86rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .classify-icon-3{
      margin: 0.1rem auto;
      width: 0.86rem;
      height: 0.79rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .definite{
    padding: 0 0.4rem;
  }
  .de-broadcast{
    margin-top: 1.4rem;
  }
  .broadcast{
    line-height: 28px;
    background-color: #d4f4fd;
    border-radius: 0.1rem;
    .icon-broadcast{
      margin: 0 0.2rem;
    }
  }
  .skip{
    margin-top: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #fff;
    text-align: center;
    .skip-item{
      flex: 1;
      position: relative;
      color: #000;
      &:nth-of-type(2){
        & > .icon:after{
          content: '';
          position: absolute;
          right: 0;
          top:0.1rem;
          height:0.69rem;
          width: 1px;
          background: #ccc;
        }
        & > .icon:before{
          content: '';
          position: absolute;
          left: 0;
          top:0.1rem;
          height:0.69rem;
          width: 1px;
          background: #ccc;
        }
      }
    }
    .icon{
      margin: 0.1rem auto;
    }
    .first{
      width: 0.7rem;
      height: 0.69rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .second{
      width: 0.6rem;
      height: 0.69rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .third{
      width: 0.69rem;
      height: 0.69rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .subject{
    margin-top: 0.5rem;
    width: 100%;
    height: 2.2rem;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    .subject-title{
      padding: 0 0.2rem;
      position: absolute;
      bottom: 0.15rem;
      width: 100%;
      .title{
      font-weight: 500;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      .line{
        display: inline-block;
        height: 0.24rem;
        width: 5px;
        background-color: #2ac8f5;
        margin-right: 0.2rem;
       }
      }
    }
  }
  .info{
    margin-top: 0.7rem;
    .headline{
      text-align: center;
      font-size: 0.38rem;
      font-weight: 700;
      position: relative;
      &:after{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -0.2rem;
        height: 2px;
        width: 1em;
        background-color: #2ac8f5;
      }
    }
    .article-item {
      background-color: #fff;
      padding: 0.3rem 0;
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      &:nth-of-type(2){
        margin-top: 0.3rem;
      }
      .article-img {
        height: 1.6rem;
        width: 2.2rem;
        border-radius: 0.1rem;
        img {
          height: 100%;
          width: 100%;
          border-radius: 0.1rem;
        }
      }
      .particulars {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 0.3rem;
        .title {
          font-size: 0.28rem;
          font-weight: 700;
          line-height: 0.52rem;
          margin-top: -0.12rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .else {
          display: flex;
          font-size: 0.28rem;
          .time{
            width: 8em;
          }
        }
      }
    }
    .article-more{
      margin: 0.4rem 0 0.7rem;
      text-align: center;
      /*font-weight: 700;*/
      /*color: #2ac8f5;*/
    }
  }
}
</style>
