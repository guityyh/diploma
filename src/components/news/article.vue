<template>
  <div class="article">
    <div class="oneNews">
      <div class="head-img"><img :src="'http://diploma.wbloc.com' + articleData.img" alt=""></div>
      <div class="title-header">
        <div class="header-left">
          <div class="title">{{articleData.title}}</div>
          <div class="else">
            <div class="time">{{articleData.publish_time}}</div>
            <div class="read"><i class="iconfont icon-yanjing"></i><span>{{articleData.reading}}</span></div>
          </div>
        </div>
        <a href="https://www.sobot.com/chat/h5/index.html?sysNum=d49779395d294b91b7e42c1776a10050" class="header-ask">咨询</a>
      </div>
      <div class="main" v-html="articleData.content"></div>
    </div>


    <div class="read-more">
      <div class="guess">猜你还想读 >>></div>
      <router-link tag="div" :to="{path: '/article', query: {id: item.id}}" class="article-item" v-for="(item,index) in articleMore">
        <div class="particulars">
          <div class="title">{{item.title}}</div>
          <div class="else">
            <div class="time">{{item.publish_time.split(' ')[0]}}</div>
          </div>
        </div>
        <div class="article-img"><img :src="'http://diploma.wbloc.com' + item.img" alt=""></div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import axios from '@/api'
  export default {
    data () {
      return {
        articleData: {},
        articleMore: []
      }
    },
     created () {
      this.getArticleData()
    },
    watch: {
      '$route': 'getArticleData'
    },
    methods: {
      async getArticleData () {
        const {data : {code, data}} = await axios.get('http://diploma.wbloc.com/api/article/info', {id: this.$route.query.id})
        if (code === 200) {
          this.articleData = data
          this.newsCList()
        }
      },
      async newsCList () {
        let {data: {code,data}} = await axios.get('http://diploma.wbloc.com/api/article/lists/')
        if (code === 200) {
          const arr = data
          let key = Math.floor(Math.random() * (arr.length - 2))
          this.articleMore = arr.splice(key,2)
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .article{
    font-size: 0.28rem;
    padding-bottom: 1rem;
    .head-img{
       width: 100%;
       height: 3.5rem;
      img{
        width: 100%;
        height: 100%;
      }
     }
    .title-header{
      margin-top: 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0.4rem 0;
      background-color: #fff;
      line-height: 0.52rem;
      .title{
        font-size: 0.32rem;
        font-weight: 700;
      }
      .else{
        display: flex;
        color: #999;
        .read{
          margin-left: 0.4rem;
        }
      }
      .header-ask{
        color: #fff;
        padding: 0 0.2rem;
        background-color: #2ac8f5;
        border-radius: 0.1rem;
      }
    }
    .main{
      padding: 0.4rem;
      line-height: 0.52rem;
      background-color: #fff;
    }

    .read-more{
      margin-top: 0.2rem;
      background-color: #fff;
      padding: 0.2rem 0.4rem;
      .guess{
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #999;
        font-weight: 700;
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
    }
  }


</style>
