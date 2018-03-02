<template>
  <div class="footer">
    <div class="tab">
      <router-link tag="div" class="tab-item server" to="/">
        <div class="default"><img src="./../assets/images/serve.png" alt=""></div>
        <div class="active"><img src="./../assets/images/serve-active.png" alt=""></div>
        <span class="tab-link">诊疗服务</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/mine">
        <div class="default"><img src="./../assets/images/mine.png" alt=""></div>
        <div class="active"><img src="./../assets/images/mine-active.png" alt=""></div>
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
    z-index: 99;
    .router-link-exact-active{
      .active{
        display: inline-block !important;
      }
      .default{
        display: none;
      }
    }
    .tab{
      border-top: 2px solid #f2f2f2;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      .tab-item{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 0.8rem;
        &.server{
          border-right: 2px solid #f2f2f2;
        }
        .active{
          display: none;
        }
        .tab-link{
          font-size: 0.32rem;
          margin-left: 0.1rem;
        }
        .default, .active{
          width: 0.39rem;
          height: 0.39rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
