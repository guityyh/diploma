<template>
  <div class="news">
    <div class="header">
      <search
        v-model="value"
        position="fixed"
        @on-submit="onSubmit"
        placeholder='输入关键字搜索文章'
        ref="search"></search>
    </div>
    <div class="navbar">
      <div class="nav-padding">
        <div class="navbar-item" v-for="(item, index) in column" :key="item.id" @click="switchList(item.id, index)" :class="{active: activeIndex === index}">{{item.name}}</div>
      </div>
    </div>

    <router-link tag="div" :to="{path: '/article', query: {id: articleTop.id}}" class="headline">
      <div class="headline-img"><img :src="'http://diploma.wbloc.com' + articleTop.img" alt=""></div>
      <div class="headline-title"><p>{{articleTop.title}}</p></div>
    </router-link>

    <router-link tag="div" :to="{path: '/article', query: {id: item.id}}" class="article-item" v-for="(item, index) in articleList" :key="index">
      <div class="particulars">
        <div class="title">{{item.title}}</div>
        <div class="else">
          <div class="time">{{item.publish_time.split(' ')[0]}}</div>
          <div class="read"><i class="iconfont icon-yanjing"></i><span>{{item.reading}}</span></div>
        </div>
      </div>
      <div class="article-img"><img :src="'http://diploma.wbloc.com' + item.img" ></div>
    </router-link>


  </div>
</template>

<script>
  import axios from '@/api'
  import { Search, XButton } from 'vux'

  export default {
    components: {
      Search,
      XButton
    },
    data () {
      return {
        results: [],
        value: '',
        activeIndex: 0,
        column: [],
        articleList: [],
        articleTop: {}
      }
    },
    created () {
       this.newsClassify()
       this.newsTop()
    },
    methods: {
      onSubmit () {
        this.$refs.search.setBlur()
        this.newsCList(null, this.value)
      },
      switchList (id, index) {
        this.activeIndex = index
        this.newsCList(id)
      },
      async newsClassify () {
        let {data: {code,data}} = await axios.get('http://diploma.wbloc.com/api/category/lists')
        if (code === 200) {
          this.column = data
          this.newsCList(data[0].id)
        }
      },
      async newsCList (id, keyword) {
        let obj = {
          cid: id
        }
        if (keyword) {
          obj = {
            keyword: keyword
          }
        }
        let {data: {code,data}} = await axios.get('http://diploma.wbloc.com/api/article/lists/', obj)
        if (code === 200) {
          this.articleList = data
        }
      },
      async newsTop (id) {
        let {data: {code,data}} = await axios.get('http://diploma.wbloc.com/api/article/lists/', {is_top: 1})
        if (code === 200) {
          this.articleTop = data[0]
        }
      }
    }
  }
</script>

<style lang="scss" >
  .news{
    font-size: 0;
    padding-bottom: 1rem;
    background-color: #fff;
    .header{
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      width: 100%;
    }
    .vux-search-box{
      font-size: 0.3rem;
      top: 0;
      .weui-search-bar__label{
        height: 1.42857143em;
        line-height: 1.42857143em;
      }
    }
    .navbar{
      margin-top: 1rem;
      padding: 0 0.4rem;
      background-color: #fff;
      width: 100%;
      height: 0.72rem;
      line-height: 0.72rem;
      .nav-padding{
        overflow-x: auto;
        white-space: nowrap;
        border-right: 2px solid #ccc;
        .navbar-item{
          font-size: 0.32rem;
          font-weight: 600;
          padding: 0 0.2rem;
          display: inline-block;
          overflow: auto;
          &:first-child{
            padding-left: 0;
          }
          &.active{
            text-decoration: underline;
            color: #169BD5;
          }
        }
      }
    }
    .headline{
      position: relative;
      margin-bottom: 0.2rem;
      .headline-img{
        height: 3.4rem;
        width: 100%;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .headline-title{
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: rgba(255,255,255,0.5);
        p{
          padding: 0 0.15rem;
          font-size: 0.28rem;
          line-height: 0.52rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
    }
    .article-item {
      background-color: #fff;
      padding: 0.3rem 0.4rem;
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
  }

</style>
