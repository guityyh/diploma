<template>
  <div class="container">
    <div class="left-list">
      <div class="item" v-for="i in 10">
        <i class="iconfont icon-toutong"></i>
        <p class="text">头部</p>
      </div>
    </div>
    <router-link tag="div" to="/details" class="right-list">
      <div class="item" v-for="i in 20">打喷嚏</div>
      <div class="item">喘不过来气</div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: flex-start;
  .left-list{
    width: 30%;
    height: 100vh;
    overflow: auto;
    font-size: 0;
    border-right: 1px solid #e9e9e9;
    .item{
      text-align: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid #e9e9e9;
      .iconfont{
        color: #222;
        font-size: 0.6rem;
      }
      .text{
        color: #222;
        font-size: 0.28rem;
        margin-top: 0.14rem;
      }
    }
  }
  .right-list{
    flex: 1;
    height: 100vh;
    overflow: auto;
    font-size: 0;
    padding-left: 0.6rem;
    .item{
      font-size: 0.32rem;
      color: #333;
      height: 0.8rem;
      line-height: 0.8rem;
      border-bottom: 1px solid #e9e9e9;
    }
  }
}
</style>
