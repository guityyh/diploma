<template>
  <div class="footer">
    <div class="tab">
      <router-link tag="div" class="tab-item server" to="/">
        <i class="iconfont icon-yiliao1"></i>
        <span class="tab-link">诊疗服务</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/mine">
        <i class="iconfont icon-1gerenzhongxin20x20"></i>
        <span class="tab-link">个人中心</span>
      </router-link>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .footer{
    font-size: 0;
    background-color: #fff;
    width: 100%;
    position: fixed !important;
    bottom: 0;
    left: 0;
    z-index: 999;
    .router-link-exact-active{
      color: #169BD5;
    }
    .tab{
      border-top: 2px solid #f2f2f2;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      .tab-item{
        flex: 1;
        text-align: center;
        line-height: 0.8rem;
        &.server{
          border-right: 2px solid #f2f2f2;
        }
        .tab-link{
          font-size: 0.32rem;
          margin-left: 0.1rem;
        }
      }
    }
  }
</style>
