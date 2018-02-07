<template>
  <div class="footer">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/">
        <i class="iconfont icon-edittext7bianjiwenben"></i>
        <span class="tab-link">自查</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/book">
        <i class="iconfont icon-haofangtuo400iconfont2yiyuan"></i>
        <span class="tab-link">预约</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/news">
        <i class="iconfont icon-dianshi"></i>
        <span class="tab-link">资讯</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/mine">
        <i class="iconfont icon-gerenzhongxin"></i>
        <span class="tab-link">我的</span>
      </router-link>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .footer{
    font-size: 0;
    background-color: #EAEAEA;
    padding: 0.15rem 0 0.1rem 0;
    width: 100%;
    position: fixed !important;
    bottom: 0;
    left: 0;
    z-index: 999;
    .tab{
      padding: 0 0.2rem;
      display: flex;
      justify-content: space-around;
      text-align: center;
      .tab-item{
        flex: 1;
        text-align: center;
        .iconfont{
          font-size: 0.4rem;
        }
        .tab-link{
          font-size: 0.32rem;
          display: block;
          margin-top: 0.05rem;
        }
      }
    }
  }
</style>
