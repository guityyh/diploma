<template>
  <div class="article">
    <div class="head-img"><img src="./../../assets/images/docportrait.png" alt=""></div>
    <div class="title-header">
      <div class="header-left">
        <div class="title">我是标题我是标题</div>
        <div class="else">
          <div class="time">2018-1-28</div>
          <div class="read"><i class="iconfont icon-yanjing"></i><span>123</span></div>
        </div>
      </div>
      <router-link tag="div" to="/article" class="header-ask">咨询</router-link>
    </div>
    <div class="main">四年一届的世界杯又来了，对于全世界足球球迷而言，今年夏天注定意义非凡。
      那么除了观看世界杯正赛以外，有没有其他的方式参与其中呢？
      事实上，EASport “足球+电竞”的板块已开展多年，旗下 FIFAOline3 的顶级职业联赛 EACC 已举办了
      3年。这款游戏及赛事由腾讯全权代理，作为 FIFAOL3 的独家代理，腾讯自然不会放过任何衍生赛事内容。
      四年一届的世界杯又来了，对于全世界足球球迷而言，今年夏天注定意义非凡。
      那么除了观看世界杯正赛以外，有没有其他的方式参与其中呢？
      事实上，EASport “足球+电竞”的板块已开展多年，旗下 FIFAOline3 的顶级职业联赛 EACC 已举办了
      3年。这款游戏及赛事由腾讯全权代理，作为 FIFAOL3 的独家代理，腾讯自然不会放过任何衍生赛事内容。
    </div>

    <div class="read-more">
      <div class="guess">猜你还想读 >>></div>
      <router-link tag="div" to="/article" class="article-item" v-for="i in 2">
        <div class="particulars">
          <div class="title">给宝宝剃胎毛，以后头发就能变浓密？不存在的！</div>
          <div class="else">
            <div class="time">2018.1.23</div>
          </div>
        </div>
        <div class="article-img"><img src="./../../assets/images/article-1.jpeg" alt=""></div>
      </router-link>
    </div>
  </div>
</template>

<script>

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
  }


</style>
