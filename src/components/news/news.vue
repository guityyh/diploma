<template>
  <div class="news">
    <div class="header">
      <search
        :results="results"
        v-model="value"
        position="fixed"
        @on-submit="onSubmit"
        placeholder='输入关键字搜索文章'
        ref="search"></search>
    </div>
    <div class="navbar">
      <div class="nav-padding">
        <div class="navbar-item" v-for="(item, index) in 10" @click="switchList(item, index)" :class="{active: activeIndex === index}">科普</div>
      </div>
    </div>
    <div class="headline">
      <div class="headline-img"><img src="./../../assets/images/docportrait.png" alt=""></div>
      <div class="headline-title"><p>我是标题，早上起来多喝水!</p></div>
    </div>

    <router-link tag="div" to="/article" class="article-single" v-for="i in 10">
      <div class="article-img"><img src="./../../assets/images/docportrait.png" alt=""></div>
      <div class="definite">
        <div class="title">我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</div>
        <div class="else">
          <div class="time">2018-1-23</div>
          <div class="read">阅读量：<span>123</span></div>
        </div>
      </div>
    </router-link>


  </div>
</template>

<script>
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
        activeIndex: 0
      }
    },
    methods: {
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      switchList (item, index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang="scss" >
  .news{
    font-size: 0;
    padding-bottom: 1rem;
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
    .article-single{
      background-color: #fff;
      padding: 0.3rem 0.4rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      &:last-child{
        border-bottom: none;
      }
      .article-img{
        height: 1.5rem;
        width: 2.2rem;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .definite{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 0.1rem;
        .title{
          font-size: 0.28rem;
          line-height: 0.52rem;
          margin-top: -0.12rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .else{
          display: flex;
          justify-content: space-between;
          font-size: 0.28rem;
          color: #999;
        }
      }
    }
  }

</style>
